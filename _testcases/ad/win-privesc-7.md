---
testcase: Check the current user is belong the group 'Event Log Readers' and use wevtutil or Get-WinEvent to find the credentials
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://academy.hackthebox.com/module/67/section/642
attack_types:
  - PrivEsc
how-to-test: |
  - Identify the current user by running: `whoami`
  - Check if the user is a member of the 'Event Log Readers' group:
    - Run: `whoami /groups | findstr "Event Log Readers"`
    - Alternatively, use: `net user <username>` and look for group membership
  - If the user is part of the group, proceed to query event logs using elevated access:
    - Use `wevtutil` to list and read event logs:
      - Example: `wevtutil qe Security /c:10 /f:text`
    - Or use PowerShell `Get-WinEvent` to search specific log entries:
      - Example: `Get-WinEvent -LogName Security -MaxEvents 50`
  - Look for sensitive information such as:
    - Cleartext credentials in logs (rare, but possible due to misconfigurations or verbose logging)
    - Service account names and actions
    - Login/logout events (Event ID 4624, 4634, 4648)
    - Privilege use or assignment (Event ID 4672, 4673, 4674)
  - Document findings, including any credentials or interesting user activity from the logs
  - If credentials are found, attempt to validate them (e.g., via `runas`, `PsExec`, or RDP)
---
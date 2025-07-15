---
testcase: Check current user group 'Event Log Readers' and extract sensitive info from logs
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://notes.dollarboysushil.com/windows-privilege-escalation/group-privileges/event-log-readers
  - https://learn.microsoft.com/en-us/answers/questions/2197624/granting-non-admin-user-read-only-access-to-window
attack_types:
  - PrivEsc
how-to-test: |
  **Enumeration:**
  1. Verify the current user belongs to 'Event Log Readers':
     - Run in PowerShell:
       - `net localgroup "Event Log Readers"`
       - Or: `whoami /groups | findstr "Event Log Readers"`
  2. Confirm your username appears in the output.

  **Exploitation:**
  3. Retrieve event logs using built-in tools:
     - Example: `wevtutil qe Security /f:text /c:50`
     - Or: `Get-WinEvent -LogName Security -MaxEvents 50`
  4. Search logs for sensitive events such as:
     - Successful logons (Event ID 4624)
     - Account management actions (Event IDs 4720–4732)
  5. Analyze logs for patterns or misconfigurations, like failed logons or lateral movement, to identify weak points.
  6. Use any gathered information (usernames, hints on password policies) to support further escalation or credential guessing.

Key Notes:
  - Members of the Event Log Readers group can access all event logs.
  - Direct credential extraction is rare; focus on extracting useful operational insights.
---
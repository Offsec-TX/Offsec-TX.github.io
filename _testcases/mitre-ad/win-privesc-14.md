---
testcase: Unquoted Service Path Privilege Escalation
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1574/009
how-to-test: |
  1. On target, run:
     wmic service get name,pathname,startmode | findstr /i "auto" | findstr /i /v "\""
     to list unquoted service paths.
  2. Identify a vulnerable service (e.g., SystemExplorerHelpService).
  3. Prepare a malicious payload.exe and copy it to C:\Program.exe.
  4. Stop the service: sc stop SystemExplorerHelpService.
  5. Start the service: sc start SystemExplorerHelpService.
  6. Verify code execution under SYSTEM by checking for expected side effect (e.g., new local admin via net localgroup administrators).
---

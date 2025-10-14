---
testcase: Windows Kernel Exploit Privilege Escalation
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1068/
  - https://github.com/cube0x0/PrintNightmare
  - https://github.com/foxglovesec/HiveNightmare
how-to-test: |
  1. Enumerate installed Windows patches using systeminfo, wmic qfe list brief, or Get-Hotfix.
  2. Check permissions on sensitive files like SAM to identify potential vulnerabilities.
  3. Run HiveNightmare PoC to dump registry hives as a non-admin user.
  4. Extract credentials offline using Impacket-secretsdump with the dumped hives.
  5. Check if Print Spooler service is running.
  6. Bypass PowerShell execution policy and run PrintNightmare PoC script to add a local admin user.
  7. Verify new local admin user exists using net user command.
---
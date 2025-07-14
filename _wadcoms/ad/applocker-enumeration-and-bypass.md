---
description: |
  Enumerate and audit AppLocker policies on Windows systems to identify allowed and blocked executables for specific users. Demonstrates how attackers can review AppLocker rule collections and system security status to assess privilege escalation or bypass opportunities. Highlights the risk of misconfigured AppLocker rules that may allow unauthorized code execution.

  Command Reference:

      Target: Local Windows machine with AppLocker enabled

command: |
  Get-AppLockerPolicy -Local | Test-AppLockerPolicy -path C:\Windows\System32\cmd.exe -User Everyone

code: |
  Get-MpComputerStatus
  Get-AppLockerPolicy -Effective | select -ExpandProperty RuleCollections

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
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-applocker/applocker-overview
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-applocker/create-and-deploy-applocker-policies
  - https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-applocker/applocker-design-guide
---
description: |
  Enumerate and analyze AppLocker policies on a Windows system to identify potential privilege escalation vectors.
  The provided commands help check effective AppLocker rules and test if specific executables are allowed for certain users.

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
  - https://academy.hackthebox.com/module/54/section/485
---

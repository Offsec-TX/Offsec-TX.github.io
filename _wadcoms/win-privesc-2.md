---
description: |
  Perform comprehensive enumeration on a Windows system to identify privilege escalation opportunities.
  The provided commands gather information about running processes, environment variables, installed patches, user accounts, and system configuration.

  Command Reference:

      Target: Local Windows machine for privilege escalation enumeration

command: |
  #Tasklist
  tasklist /svc

code: |
  #Display All Environment Variables
  set
  #View Detailed Configuration Information
  #Patches and Updates
  wmic qfe
  Get-HotFix | ft -AutoSize
  #Installed Programs
  wmic product get name
  Get-WmiObject -Class Win32_Product |  select Name, Version
  #Display Running Processes
  netstat -ano
  #User & Group Information
  ##Logged-In Users
  query user
  ##Current User
  echo %USERNAME%
  ##Current User Privileges
  whoami /priv
  ##Current User Group Information
  whoami /groups
  ##Get All Users
  net user
  ##Get All Groups
  net localgroup
  ##Details About a Group
  net localgroup administrators
  ##Get Password Policy & Other Account Information
  net accounts
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

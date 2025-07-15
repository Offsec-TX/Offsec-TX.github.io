---
description: |
  Enumerate Windows system details to identify privilege escalation vectors. The commands collect information about running services, environment variables, installed patches, programs, user accounts, groups, and password policies, helping assess potential security weaknesses.

  Command Reference:

      Target: Local Windows machine for privilege escalation enumeration

command: |
  # List running services and associated processes
  tasklist /svc

code: |
  # Display all environment variables
  set
  # View installed patches and updates
  wmic qfe
  Get-HotFix | ft -AutoSize
  # List installed programs
  wmic product get name
  Get-WmiObject -Class Win32_Product | select Name, Version
  # Display running network connections
  netstat -ano
  # User & Group Information
  query user
  echo %USERNAME%
  whoami /priv
  whoami /groups
  net user
  net localgroup
  net localgroup administrators
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
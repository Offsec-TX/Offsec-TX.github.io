---
description: |
  Leverage SQL*Plus to access an Oracle database using provided credentials. This approach allows you to authenticate and potentially escalate privileges on the target system for further enumeration and assessment.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  sqlplus scott/tiger@10.129.205.19/XE as sysdba

code: |
  sql scott/tiger@10.129.198.28/XE as sysdba

items:
  - Username
  - Password
services:
  - ORACLE-TNS
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/112/section/2117
---

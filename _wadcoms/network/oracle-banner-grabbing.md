---
description: |
  Perform Oracle banner grabbing to identify the Oracle TNS service and its version running on a target system. 
  The provided commands use tools like Nmap and Netcat to connect to the Oracle TNS port (1521), retrieve the service banner, and gather valuable information for enumeration and vulnerability assessment.
  
  Command Reference:
  
      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 1521 -sV 10.10.10.1

code: |
  nc -vn 10.10.10.1 1521

items:
  - No_Creds
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

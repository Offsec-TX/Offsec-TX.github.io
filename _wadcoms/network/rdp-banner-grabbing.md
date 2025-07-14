---
description: |
  Perform RDP banner grabbing to identify the RDP service version running on a target system. 
  The provided commands use tools like Nmap and Metasploit to connect to the RDP port (3389), retrieve the service banner, and gather valuable information for enumeration and vulnerability assessment.
  
  Command Reference:
  
      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 3389 -sV 10.10.10.1

code: |
  use auxiliary/scanner/rdp/rdp_scanner

items:
  - No_Creds
services:
  - RDP
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/112/section/1242
---

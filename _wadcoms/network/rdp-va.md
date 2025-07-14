---
description: |
  Perform an RDP vulnerability assessment to identify the RDP service version and potential weaknesses on the target system. 
  The provided commands use Nmap and Metasploit modules to retrieve service banners and scan for vulnerabilities on the RDP port (3389).

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -sV -sC 10.129.201.248 -p3389 --script 'rdp*'

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

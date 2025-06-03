---
description: |
  Perform IPMI banner grabbing to identify the IPMI service version running on a target system. 
  The provided commands use tools like Nmap and Metasploit to connect to the IPMI port (623), retrieve the service banner, and gather valuable information for enumeration and vulnerability assessment.
  
  Command Reference:
  
      Target IP: 10.10.10.1

command: |
  sudo nmap -sU -p 623 --script ipmi-version -sV 10.10.10.1

code: |
  msf6 > use auxiliary/scanner/ipmi/ipmi_version

items:
  - No_Creds
services:
  - IPMI
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/112/section/2117
---

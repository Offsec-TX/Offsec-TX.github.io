---
description: |
  Perform subdomain fuzzing to enumerate subdomains for a given target domain. 
  The provided commands use tools like ffuf and gobuster to discover potentially misconfigured or hidden subdomains, which can help identify additional attack surfaces for further vulnerability assessment.

  Command Reference:

      Target Domain: inlanefreight.com

command: |
  ffuf -w ~/Documents/tools/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -u https://FUZZ.inlanefreight.com/

code: |
  gobuster dns -d inlanefreight.com -w ~/Documents/tools/SecLists/Discovery/DNS/subdomains-top1million-110000.txt -t 50

items:
  - 
services:
  - 
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/54/section/485
---

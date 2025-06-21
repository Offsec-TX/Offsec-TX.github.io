---
description: |
  Perform virtual host fuzzing to enumerate hidden or misconfigured virtual hosts on a target web server.
  This approach leverages tools like ffuf and gobuster's vhost module to identify potential subdomains and host headers that may not be publicly disclosed, thereby uncovering additional attack surfaces.

  Command Reference:

      Target IP: 10.10.10.1
      -p, --pattern string        File containing replacement patterns {GOBUSTER}

command: |
  ffuf -w ~/Documents/tools/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -u https://inlanefreight.com -H "Host: FUZZ.inlanefreight.com"

code: |
  gobuster vhost -u http://inlanefreight.htb:43863 -w ~/Documents/tools/SecLists/Discovery/DNS/subdomains-top1million-110000.txt --append-domain -t 200
  gobuster vhost -u http://inlanefreight.htb:43863 -w ~/Documents/tools/SecLists/Discovery/DNS/subdomains-top1million-110000.txt -p pattern -t 200

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

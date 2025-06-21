---
description: |
  Perform extension fuzzing to uncover hidden file types and extensions on a target web server. 
  This approach utilizes tools like ffuf and gobuster to identify files with uncommon or misconfigured extensions, helping to reveal overlooked content and vulnerabilities.

  Command Reference:

      Target IP: 10.10.10.1

      index{GOBUSTER} -p, --pattern string        File containing replacement patterns

command: |
  ffuf -u http://83.136.253.201:52487/blog/indexFUZZ -w ~/Documents/tools/SecLists/Discovery/Web-Content/web-extensions.txt:FUZZ

code: |
  gobuster dir -u http://83.136.253.201:52487/blog/ -w ~/Documents/tools/SecLists/Discovery/Web-Content/web-extensions.txt -p pattern

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

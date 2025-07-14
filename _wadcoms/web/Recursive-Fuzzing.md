---
description: |
  Perform recursive directory fuzzing to discover nested directories and hidden content on a target web server. 
  This approach uses ffuf and feroxbuster to probe directories recursively, revealing potential vulnerabilities and misconfigurations in subdirectories.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  ffuf -u http://83.136.253.201:52487/FUZZ -recursion -recursion-depth 1 -e .php -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ -v

code: |
  feroxbuster -u http://83.136.253.201:52487/ -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt -x php --depth 2 -v

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

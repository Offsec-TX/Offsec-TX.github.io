---
description: |
  Perform directory fuzzing to identify hidden paths and directories on a target web server. 
  The provided commands use tools like ffuf, gobuster, and feroxbuster to enumerate directories and discover potential misconfigurations and vulnerabilities.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  ffuf -u http://83.136.253.201:52487/FUZZ -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ

code: |
  gobuster dir -u http://83.136.253.201:52487 -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt
  feroxbuster -u http://83.136.253.201:52487 -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt

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

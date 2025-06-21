---
description: |
  Use page fuzzing techniques to discover hidden web pages and content on a target web server. 
  Leveraging tools like ffuf, gobuster, and feroxbuster, this process identifies web pages with specified extensions, potentially revealing misconfigurations and hidden directories.
  
  Command Reference:

      Target IP: 10.10.10.1

command: |
  ffuf -u http://83.136.253.201:52487/blog/FUZZ.php -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ

code: |
  gobuster dir -u http://83.136.253.201:52487/blog/ -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt -x php,html,txt,js
  feroxbuster -u http://83.136.253.201:52487/blog/ -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt -x php,html,txt,js

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

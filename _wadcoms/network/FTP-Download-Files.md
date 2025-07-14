---
description: |
  Download files and directories from an FTP server using wget. Each command below can be used individually for different scenarios.

command: |
  wget -m ftp://anonymous:anonymous@10.10.10.98

code: |
  wget -m --no-passive ftp://anonymous:anonymous@10.10.10.98
  wget -r --user="USERNAME" --password="PASSWORD" ftp://server.com/
items:
  - Username
  - Password
services:
  - FTP
OS:
  - Linux
  - Windows
  - Mac
attack_types:
  - Enumeration
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ftp/index.html
---

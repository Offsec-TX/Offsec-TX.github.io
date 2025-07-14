---
description: |
  Connect to the FTP server in your web browser using the provided URL format. This allows you to access the FTP service with anonymous credentials for basic browsing and file enumeration.

command: |
  ftp://anonymous:anonymous@10.10.10.98
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

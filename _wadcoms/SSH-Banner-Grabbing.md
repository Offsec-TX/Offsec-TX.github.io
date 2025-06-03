---
description: |
  Perform FTP banner grabbing to identify the FTP service and version running on a target system. The provided commands use tools like Nmap, Netcat, and OpenSSL to connect to the FTP port, retrieve the service banner, and gather valuable information for enumeration and assessment. This technique helps in fingerprinting the FTP server and discovering potential vulnerabilities.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 22 -sV 10.10.10.1

code: |
  nc -vn 10.10.10.1 22

items:
  - No_Creds
services:
  - SSH
OS:
  - Linux
  - Windows
  - Mac
attack_types:
  - Enumeration
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ftp/index.html
---

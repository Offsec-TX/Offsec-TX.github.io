---
description: |
  Use Nmap to perform an FTP bounce attack scan, which leverages a vulnerable FTP server to scan other hosts or ports indirectly. The provided commands demonstrate how to use the `-b` option in Nmap to specify FTP credentials and a target, allowing you to enumerate open ports on remote systems via the FTP server. This technique is useful for bypassing network restrictions and identifying accessible services through the FTP bounce vulnerability.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 21 --script ftp-bounce -sV 10.10.10.1

code: |
  nmap -b anonymous:anonymous@10.10.10.1 127.0.0.1
  nmap -Pn -v -p 21,80 -b ftp:ftp@10.2.1.5 127.0.0.1
  nmap -v -p 21,22,445,80,443 -b ftp:ftp@10.2.1.5 192.168.0.1/24

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

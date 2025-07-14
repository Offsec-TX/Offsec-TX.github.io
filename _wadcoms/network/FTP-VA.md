---
description: |
  Use the nmap tool to perform an FTP vulnerability scan on the target system. This command leverages multiple nmap NSE scripts specific to FTP to identify common vulnerabilities, misconfigurations, and potential security issues in the FTP service.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 21 --script="ftp-anon,ftp-bounce,ftp-brute,ftp-libopie,ftp-proftpd-backdoor,ftp-syst,ftp-vsftpd-backdoor,ftp-vuln-cve2010-4221" -sV 10.10.10.1

code: |
  nmap -Pn -p 21 --script vuln -sV 10.10.10.1

items:
  - No_Creds
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

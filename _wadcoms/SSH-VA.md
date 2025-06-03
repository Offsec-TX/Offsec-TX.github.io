---
description: |
  Use Nmap to perform SSH vulnerability assessment on the target system. The provided commands utilize various Nmap NSE scripts to enumerate SSH authentication methods, test for weak credentials, gather SSH host keys, check for supported algorithms, and identify potential vulnerabilities or misconfigurations in the SSH service.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 22 --script="ssh-auth-methods,ssh-brute,ssh-hostkey,ssh-publickey-acceptance,ssh-run,ssh2-enum-algos,sshv1" -sV 10.10.10.1

code: |
  nmap -Pn -p 22 --script vuln -sV 10.10.10.1

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

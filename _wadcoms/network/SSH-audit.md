---
description: |
  Use SSH-Audit to perform a comprehensive vulnerability assessment on the target SSH service. This tool enumerates SSH authentication methods, checks for weak credentials, gathers SSH host keys, assesses supported algorithms, and identifies potential vulnerabilities or misconfigurations.

  Command Reference:

      Target IP: 10.129.14.132

command: |
  ssh-audit.py 10.129.14.132

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
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ssh.html
---

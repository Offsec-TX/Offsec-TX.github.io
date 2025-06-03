---
description: |
  Use the SSH command in verbose mode to investigate supported authentication methods on the target SSH service. 
  This approach reveals details about available authentication schemes—such as password and key-based methods—which can help in further vulnerability assessments.

  Command Reference:

      Target IP: 10.129.14.132

command: |
  ssh -v cry0l1t3@10.129.14.132

code: |
  ssh -v cry0l1t3@10.129.14.132 -o PreferredAuthentications=password

items:
  - Username
  - Password
  - SSH Key
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

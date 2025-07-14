---
description: |
  Perform an RDP security check to identify the RDP service version and potential weaknesses on the target system. 
  The provided commands utilize the rdp-sec-check tool, which retrieves service banners and scans for vulnerabilities on the RDP port (3389).

  Command Reference:

      Target IP: 10.10.10.1

command: |
  rdp-sec-check.pl 10.129.201.248

code: |
  git clone https://github.com/CiscoCXSecurity/rdp-sec-check.git && cd rdp-sec-check

items:
  - No_Creds
services:
  - RDP
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/112/section/1242
---

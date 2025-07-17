---
description: |
  Perform directory fuzzing to identify hidden paths and directories on a target web server. 
  The provided commands use tools like ffuf, gobuster, and feroxbuster to enumerate directories and discover potential misconfigurations and vulnerabilities.

command: |
  lsattr /etc/passwd /etc/shadow

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

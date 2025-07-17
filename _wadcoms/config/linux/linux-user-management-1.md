---
description: |
  Enumerate user accounts and login activity on a Linux system. 
  The provided commands display the contents of /etc/passwd to list user accounts and use lastlog to show the last login times for each user, aiding in configuration review and security assessment.

command: |
  cat /etc/passwd && lastlog

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

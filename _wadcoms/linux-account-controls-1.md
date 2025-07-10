---
description: |
  Identify accounts with root privileges on a Linux system.
  The provided command uses awk to list all users with a UID of 0 in /etc/passwd, aiding in configuration review and security assessment.

command: |
  awk -F: '$3 == 0 { print $1 }' /etc/passwd

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

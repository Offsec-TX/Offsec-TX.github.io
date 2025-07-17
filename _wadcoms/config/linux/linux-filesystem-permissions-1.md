---
description: |
  Identify files with SUID or SGID permissions on a Linux system.
  The provided command searches common binary directories for files with these special permissions, which can be important for configuration review and privilege escalation assessment.

command: |
  find /bin /sbin /usr/bin /usr/sbin -type f \( -perm -4000 -o -perm -2000 \)

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

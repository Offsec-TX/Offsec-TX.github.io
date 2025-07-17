---
description: |
  Check user process limits on a Linux system.
  The provided command uses ulimit to display the maximum number of user processes, which helps in configuration review and security assessment. You can also review PAM limits for more granular control.

command: |
  ulimit -u  # or review /etc/security/limits.conf for PAM limits

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

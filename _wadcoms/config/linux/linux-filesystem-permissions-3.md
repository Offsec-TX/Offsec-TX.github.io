---
description: |
  Check mount options for important directories such as /tmp, /var, and /home on a Linux system.
  The provided command displays the mount options, which is useful for configuration review and ensuring security best practices (e.g., nodev, noexec, nosuid).

command: |
  findmnt -nro OPTIONS /tmp /var /home

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

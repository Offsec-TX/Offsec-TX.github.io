---
description: |
  Review log rotation configuration on a Linux system.
  The provided command displays the contents of /etc/logrotate.conf, which defines how log files are rotated and retained, aiding in configuration review and security assessment.

command: |
  cat /etc/logrotate.conf

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

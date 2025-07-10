---
description: |
  Review backup and recovery job configurations on a Linux system.
  The provided command lists scheduled cron jobs, which may include backup or recovery tasks, aiding in configuration review and security assessment.

command: |
  crontab -l

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

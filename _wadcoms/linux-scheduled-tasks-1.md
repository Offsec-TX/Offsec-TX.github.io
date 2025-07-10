---
description: |
  Enumerate scheduled tasks and cron jobs on a Linux system.
  The provided commands list user and system cron jobs, as well as scheduled tasks in common cron directories, aiding in configuration review and security assessment.

command: |
  crontab -l; ls -l /etc/cron* /var/spool/cron

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

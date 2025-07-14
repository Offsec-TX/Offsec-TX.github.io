---
description: |
  Check cron access control files on a Linux system.
  The provided command lists the permissions and existence of /etc/cron.allow and /etc/cron.deny, which control user access to cron jobs and aid in configuration review and security assessment.

command: |
  ls -l /etc/cron.allow /etc/cron.deny

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

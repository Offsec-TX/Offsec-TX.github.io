---
description: |
  Check SSH configuration for user access restrictions on a Linux system.
  The provided command inspects the sshd_config file for the AllowUsers directive, which specifies which users are permitted to log in via SSH, aiding in configuration review and security assessment.

command: |
  grep AllowUsers /etc/ssh/sshd_config

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

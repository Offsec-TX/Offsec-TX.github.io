---
description: |
  Check SSH configuration for root login permissions on a Linux system.
  The provided command inspects the sshd_config file to determine if root login is permitted, aiding in configuration review and security assessment.

command: |
  grep PermitRootLogin /etc/ssh/sshd_config

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

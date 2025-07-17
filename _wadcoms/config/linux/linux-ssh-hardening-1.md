---
description: |
  Check SSH configuration for password authentication settings on a Linux system.
  The provided command inspects the sshd_config file to determine if password authentication is enabled or disabled, aiding in configuration review and security assessment.

command: |
  grep -i 'PasswordAuthentication' /etc/ssh/sshd_config

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Check SSH configuration for client session timeout settings on a Linux system.
  The provided command inspects the sshd_config file for the ClientAliveInterval directive, which controls how often the server sends keepalive messages to connected clients, aiding in configuration review and security assessment.

command: |
  grep -E 'ClientAliveInterval' /etc/ssh/sshd_config

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

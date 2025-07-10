---
description: |
  List all active sockets managed by systemd on a Linux system.
  The provided command helps review which sockets are currently in use, aiding in configuration review and security assessment.

command: |
  systemctl list-sockets

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

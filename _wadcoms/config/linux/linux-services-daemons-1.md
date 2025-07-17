---
description: |
  List all available service unit files on a Linux system using systemctl.
  This command helps review which services are enabled, disabled, or static, aiding in configuration review and security assessment.

command: |
  systemctl list-unit-files --type=service

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

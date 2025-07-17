---
description: |
  Enumerate all services and running services on a Linux system using systemctl. 
  These commands help identify active and inactive services, which is useful for configuration review and security assessment.

command: |
  systemctl list-units --type=service && systemctl list-units --type=service --state=running

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---
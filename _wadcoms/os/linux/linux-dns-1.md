---
description: |
  Review DNS configuration on a Linux system.
  The provided command suggests checking /etc/resolv.conf or the DNS server configuration to verify DNS settings, aiding in configuration review and security assessment.

command: |
  cat /etc/resolv.conf  # or review DNS server config files

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

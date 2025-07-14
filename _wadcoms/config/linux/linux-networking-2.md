---
description: |
  Check the status of IPv6 on a Linux system.
  The provided command uses sysctl to display whether IPv6 is disabled, aiding in configuration review and network security assessment.

command: |
  sysctl net.ipv6.conf.all.disable_ipv6

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

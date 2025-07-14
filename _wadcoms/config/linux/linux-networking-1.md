---
description: |
  Check the status of reverse path filtering on a Linux system.
  The provided command uses sysctl to display the value of net.ipv4.conf.all.rp_filter, which helps assess anti-spoofing and network security configuration.

command: |
  sysctl net.ipv4.conf.all.rp_filter

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

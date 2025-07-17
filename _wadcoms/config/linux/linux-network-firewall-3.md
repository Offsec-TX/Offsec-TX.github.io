---
description: |
  Check if IP forwarding is enabled on a Linux system.
  The provided command uses sysctl to display the status of net.ipv4.ip_forward, which is important for configuration review and network security assessment.

command: |
  sysctl net.ipv4.ip_forward

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

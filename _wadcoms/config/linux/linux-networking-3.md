---
description: |
  Check if ICMP echo requests (ping) are ignored on a Linux system.
  The provided command uses sysctl to display the value of net.ipv4.icmp_echo_ignore_all, which helps assess network security and system responsiveness to ping requests.

command: |
  sysctl net.ipv4.icmp_echo_ignore_all

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

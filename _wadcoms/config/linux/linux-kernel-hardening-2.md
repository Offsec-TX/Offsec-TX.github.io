---
description: |
  Review kernel module blacklisting and hardening settings on a Linux system.
  The provided command displays the contents of all files in /etc/modprobe.d/, which is useful for identifying blacklisted modules and enforcing kernel security policies.

command: |
  cat /etc/modprobe.d/*

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Check kernel address space layout randomization (ASLR) settings on a Linux system.
  The provided command displays the value of randomize_va_space, which helps assess kernel hardening and memory protection configuration.

command: |
  cat /proc/sys/kernel/randomize_va_space

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

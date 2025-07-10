---
description: |
  Check process core dump settings on a Linux system.
  The provided command inspects the value of fs.suid_dumpable using sysctl, which helps determine if core dumps are enabled for setuid programs—an important aspect of process hardening and security assessment.

command: |
  sysctl fs.suid_dumpable

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

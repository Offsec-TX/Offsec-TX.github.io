---
description: |
  Check if the kexec kernel module loading service is enabled on a Linux system.
  The provided command verifies the status of kexec-load.service, which is important for kernel hardening and security assessment.

command: |
  systemctl is-enabled kexec-load.service

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

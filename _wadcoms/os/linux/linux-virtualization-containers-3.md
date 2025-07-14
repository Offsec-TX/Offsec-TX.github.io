---
description: |
  Check SELinux enforcement status on a Linux container host.
  The provided command uses getenforce to determine if SELinux is enforcing, permissive, or disabled, which is important for container security and configuration review.

command: |
  getenforce  # Run on the container host to check container policies

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

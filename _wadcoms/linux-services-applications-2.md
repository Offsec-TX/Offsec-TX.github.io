---
description: |
  Display detailed properties of all systemd units on a Linux system.
  The provided command uses systemctl show to output configuration and status information for systemd-managed services, aiding in configuration review and security assessment.

command: |
  systemctl show

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Enumerate users with sudo or administrative privileges on a Linux system.
  The provided commands check the /etc/sudoers file and list members of the sudo and wheel groups, aiding in configuration review and security assessment.

command: |
  grep '^%sudo' /etc/sudoers; getent group sudo && sudo getent group wheel

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Protect log files from unauthorized modification on a Linux system.
  The provided command uses chattr to set the immutable attribute on all files in /var/log, preventing changes and aiding in configuration review and security assessment.

command: |
  chattr +i /var/log/*

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

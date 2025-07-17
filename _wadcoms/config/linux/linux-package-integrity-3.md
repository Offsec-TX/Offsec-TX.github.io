---
description: |
  Verify the integrity of installed packages on a Linux system using RPM.
  The provided command checks for any modifications to files installed by a specific package, aiding in configuration review and security assessment.

command: |
  rpm -V <package>

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

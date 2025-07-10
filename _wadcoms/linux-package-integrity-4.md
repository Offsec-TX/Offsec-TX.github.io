---
description: |
  Check file attributes and extended attributes on a Linux system.
  The provided commands use lsattr and getfattr to display standard and extended file attributes, aiding in configuration review and security assessment.

command: |
  lsattr <file> || getfattr -d <file>

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

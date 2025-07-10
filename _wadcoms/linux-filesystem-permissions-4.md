---
description: |
  Check file integrity on a Linux system using AIDE (Advanced Intrusion Detection Environment).
  The provided command runs an integrity check to detect unauthorized changes to important system files, aiding in configuration review and security assessment.

command: |
  aide --check

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

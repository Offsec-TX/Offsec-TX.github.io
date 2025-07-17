---
description: |
  Review password aging policies on a Linux system. 
  The provided command checks the /etc/login.defs file for settings related to maximum password age, minimum password age, and password expiration warnings, aiding in configuration review and security assessment.

command: |
  grep -E "PASS_MAX_DAYS|PASS_MIN_DAYS|PASS_WARN_AGE" /etc/login.defs

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

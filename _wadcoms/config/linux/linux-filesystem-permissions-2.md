---
description: |
  Check the permissions of sensitive files such as /etc/shadow on a Linux system.
  The provided command verifies that /etc/shadow has restrictive permissions (e.g., -rw-------), which is important for configuration review and security assessment.

command: |
  ls -l /etc/shadow  # should be -rw------- or similar

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  -
---

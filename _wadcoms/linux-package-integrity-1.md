---
description: |
  Check if FIPS mode is enabled on a Linux system to ensure cryptographic module integrity.
  The provided command uses fips-mode-setup to verify the current FIPS mode status, aiding in configuration review and security assessment.

command: |
  fips-mode-setup --check

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

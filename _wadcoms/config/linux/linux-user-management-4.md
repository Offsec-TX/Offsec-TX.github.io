---
description: |
  Review account lockout policies on a Linux system. 
  The provided command checks the PAM configuration for the use of pam_faillock, which enforces account lockout after a number of failed authentication attempts, aiding in configuration review and security assessment.

command: |
  grep pam_faillock /etc/pam.d/system-auth

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Review password quality and complexity requirements on a Linux system. 
  The provided commands check PAM configuration for password quality enforcement and display the contents of the pwquality configuration file for further assessment.

command: |
  grep pam_pwquality.so /etc/pam.d/system-auth

code: |
  cat /etc/security/pwquality.conf

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

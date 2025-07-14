---
description: |
  Check if two-factor authentication (2FA) using Google Authenticator is enabled for SSH on a Linux system.
  The provided command inspects the PAM configuration for the presence of pam_google_authenticator, aiding in configuration review and security assessment.

command: |
  grep pam_google_authenticator /etc/pam.d/sshd

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

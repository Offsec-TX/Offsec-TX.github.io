---
description: |
  Verify package signature checking is enabled on a Linux system.
  The provided command searches for gpgcheck settings in yum configuration files to ensure package integrity verification is enforced, aiding in configuration review and security assessment.

command: |
  grep gpgcheck /etc/yum.conf /etc/yum.repos.d/*

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

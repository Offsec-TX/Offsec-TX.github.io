---
description: |
  Check antivirus status and version on a Linux system using ClamAV.
  The provided commands display the ClamAV version and check the status of the clamav-daemon service, aiding in configuration review and security assessment.

command: |
  clamscan -V; systemctl status clamav-daemon

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

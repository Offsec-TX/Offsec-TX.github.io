---
description: |
  Identify the Linux operating system version, kernel release, and system hostname on a target machine. 
  The provided commands use standard Linux utilities to gather OS details, kernel version, and other relevant system information for configuration review and assessment.

command: |
  cat /etc/os-release && uname -r && hostnamectl

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

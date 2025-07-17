---
description: |
  List open network ports and listening services on a Linux system.
  The provided commands use ss and netstat to display active TCP and UDP sockets, aiding in configuration review and security assessment.

command: |
  ss -tuln && netstat -tuln

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

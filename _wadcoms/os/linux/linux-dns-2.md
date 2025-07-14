---
description: |
  Check the status of the Avahi mDNS/DNS-SD daemon on a Linux system.
  The provided command uses systemctl to verify if avahi-daemon is running, aiding in configuration review and network service assessment.

command: |
  systemctl status avahi-daemon

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

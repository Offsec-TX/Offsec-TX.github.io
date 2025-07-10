---
description: |
  Check logging and auditing services on a Linux system.
  The provided commands verify the status of rsyslog and the Linux Audit framework, aiding in configuration review and security assessment.

command: |
  systemctl status rsyslog; auditctl -s

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---
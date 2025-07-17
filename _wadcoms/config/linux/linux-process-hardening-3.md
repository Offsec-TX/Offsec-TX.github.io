---
description: |
  Check the status of the Linux Audit framework using auditctl.
  The provided command displays the current audit subsystem status, which is important for monitoring, process hardening, and security assessment.

command: |
  auditctl -s

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

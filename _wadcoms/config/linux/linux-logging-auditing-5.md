---
description: |
  Check auditd backlog settings on a Linux system.
  The provided command searches for backlog configuration in /etc/audit/audit.rules, which helps ensure proper logging of audit events and aids in configuration review and security assessment.

command: |
  grep backlog /etc/audit/audit.rules

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

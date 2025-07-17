---
description: |
  Check for remote logging configuration on a Linux system.
  The provided command searches for remote log destinations (indicated by '@') in rsyslog configuration files, aiding in configuration review and security assessment.

command: |
  grep '@' /etc/rsyslog.conf /etc/rsyslog.d/*

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

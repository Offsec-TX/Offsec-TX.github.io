---
description: |
  Check firewall status and rules on a Linux system.
  The provided commands use iptables to list current firewall rules and firewall-cmd to check the firewall state, aiding in configuration review and security assessment.

command: |
  iptables -L -n || firewall-cmd --state

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

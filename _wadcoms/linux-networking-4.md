---
description: |
  List network namespaces on a Linux system.
  The provided command uses ip netns list to display all configured network namespaces, aiding in configuration review and network isolation assessment.

command: |
  ip netns list

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

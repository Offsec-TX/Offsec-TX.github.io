---
description: |
  Check for available security updates and advisories on a Linux system using package management tools. 
  The provided commands use yum and dnf to list all security-related updates, helping to assess the system's patch status and identify potential vulnerabilities.

command: |
  yum updateinfo list security all && dnf updateinfo list security all

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

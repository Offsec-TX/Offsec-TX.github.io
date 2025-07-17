---
description: |
  Check for bootloader password protection on a Linux system.
  The provided command searches for password entries in the GRUB2 user configuration file, aiding in configuration review and security assessment.

command: |
  grep -i password /boot/grub2/user.cfg

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

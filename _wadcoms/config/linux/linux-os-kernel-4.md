---
description: |
  Check loaded kernel modules and identify if USB storage is blacklisted on a Linux system. 
  The provided commands help review kernel module configurations and security settings for device control and compliance.

command: |
  lsmod && lsmod | grep usb_storage && grep -r blacklist /etc/modprobe.d/

OS:
  - Linux
attack_types:
  - Configuration Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

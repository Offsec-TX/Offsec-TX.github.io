---
description: |
  Check for SSH rate limiting and brute-force protection on a Linux system.
  The provided command searches for rate limiting settings in the sshd_config file, and you can also use tools like fail2ban to protect against brute-force attacks.

command: |
  grep -i rate /etc/ssh/sshd_config  # or use fail2ban

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

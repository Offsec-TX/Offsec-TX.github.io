---
description: |
  Check if a Docker container is running in privileged mode on a Linux system.
  The provided command uses docker inspect to determine the privileged status of a specific container, aiding in configuration review and security assessment.

command: |
  docker inspect --format '{{.HostConfig.Privileged}}' <container>

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

---
description: |
  Perform a security compliance scan on a Linux system using OpenSCAP.
  The provided command uses oscap to evaluate the system against a specified security profile, generating a results file for configuration review and security assessment.

command: |
  oscap xccdf eval --profile <profile> --results scan.xml /usr/share/xml/scap/ssg/content/ssg-<os>.xml

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---

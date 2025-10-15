---
testcase: Interacting with Users - Vulnerable Service Interaction
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Enumerate installed software for known vulnerabilities (e.g., CVE-2019-15752).
  - Check for writable access to directories used by system services (e.g., C:\ProgramData\DockerDesktop\version-bin).
  - Place a malicious executable or script in a writable service directory.
  - Wait for the service to restart or for authentication events triggered by users to execute the payload.
---

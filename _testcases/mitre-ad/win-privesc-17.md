---
testcase: Credential Hunting via File/History/DPAPI Artifacts
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  1. Use findstr to recursively search for "password" across .txt, .ini, .cfg, .config, and .xml files for credential artifacts.
  2. Check for stray web.config files in web server directories for hardcoded passwords.
  3. Inspect browser dictionary files for leaked credentials.
  4. Examine unattend.xml or similar setup files for plaintext or base64 encoded passwords.
  5. Review PowerShell command history for credential usage/commands, both for current and other users.
  6. If encrypted PowerShell credentials (Export-Clixml files) are found, attempt to decrypt by running Import-Clixml as the same user.
---

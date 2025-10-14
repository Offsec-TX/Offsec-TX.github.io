---
testcase: Manual Search for Credentials
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Open Command Prompt or PowerShell.
  - Search for files containing keywords like "password" in common configuration and text file types (.xml, .ini, .txt, .config).
  - Use the following example commands to perform the search:

    - `findstr /SI /M "password" *.xml *.ini *.txt`
    - `findstr /si password *.xml *.ini *.txt *.config`
    - `findstr /spin "password" *.*`
    - `select-string -Path <path> -Pattern password` (PowerShell)

  - Review the output for any files or lines containing potential credentials.
---

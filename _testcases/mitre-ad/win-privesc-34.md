---
testcase: Pillaging - Extract Credentials from Files and User History
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Search for passwords and credentials in user files across the system:
    - Use commands:
      - `findstr /SIM /C:"password" *.txt *ini *.cfg *.config *.xml`
      - `cd C:\Users\<user>\Documents & findstr /SI /M "password" *.xml *.ini *.txt`
  - Check PowerShell history for credentials:
    - `gc (Get-PSReadLineOption).HistorySavePath`
---

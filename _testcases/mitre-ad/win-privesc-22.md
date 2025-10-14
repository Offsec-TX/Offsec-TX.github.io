---
testcase: Other Files of Interest
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Check for credentials in system files and logs, such as:
    - `%SYSTEMDRIVE%\pagefile.sys`
    - `%WINDIR%\debug\NetSetup.log`
    - `%WINDIR%\repair\sam`, `%WINDIR%\repair\system`, etc.
    - `%USERPROFILE%\ntuser.dat`
    - `%USERPROFILE%\LocalS~1\Tempor~1\Content.IE5\index.dat`
    - Any unusual files in `C:\ProgramData\Configs\*` or system PowerShell folders.
---

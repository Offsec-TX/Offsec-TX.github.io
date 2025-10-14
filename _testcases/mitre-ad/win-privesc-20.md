---
testcase: Search for Sensitive File Extensions
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Identify files with extensions or names commonly used to store credentials, such as:
    - .kdbx, .vmdk, .vdhx, .ppk, .rdp, .config, .vnc, .cred
  - Use the following example commands to search for these files:
    - `dir /S /B *pass*.txt *pass*.xml *pass*.ini *cred* *vnc* *.config*`
    - `where /R C:\ *.config`
    - `Get-ChildItem C:\ -Recurse -Include *.rdp, *.config, *.vnc, *.cred -ErrorAction Ignore`
  - Review the results for files that may contain sensitive information or credentials.
---

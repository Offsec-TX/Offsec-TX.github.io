---
testcase: Miscellaneous Techniques - User/Computer Description Field Enumeration
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Enumerate local user descriptions:
    - PowerShell: `Get-LocalUser`
    - Review the Description column for sensitive or suspicious data.
  - Enumerate computer descriptions:
    - PowerShell: `Get-WmiObject -Class Win32_OperatingSystem | select Description`
  - Consider the risks of storing credentials or sensitive information in these fields, as attackers can easily enumerate and abuse them for privilege escalation or lateral movement.
---

---
testcase: Dealing with End of Life Systems
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Identify end-of-life (EOL) targets:
    - Enumerate all hosts in scope.
    - Use tools like systeminfo, WMI, or PowerShell to determine OS versions.
    - Validate EOL status (e.g., check Microsoft support lifecycle).
  - Enumerate patch level and vulnerabilities:
    - Run `wmic qfe` to list installed patches.
    - Use tools such as Sherlock or Windows Exploit Suggester to compare patch levels and identify missing updates.
    - Note missing critical patches or outdated systems.
  - Scan for weak or missing security features:
    - Check for features unavailable on EOL systems (e.g., Defender ATP, Credential Guard, AppLocker).
    - Use PowerShell or command-line checks (e.g., `Get-AppLockerPolicy`, `Get-MpComputerStatus`).
  - Privilege escalation validation:
    - Based on identified vulnerabilities, attempt privilege escalation exploits (e.g., Task Scheduler XML vuln MS10-092).
    - Deploy and execute payloads as appropriate.
    - Confirm SYSTEM privileges if successful.
    - If the first exploit fails, try alternate local exploits or manual methods.
  - Alternate privilege escalation techniques:
    - Check for weak service ACLs, unquoted service paths, insecure registry permissions, or vulnerable drivers.
    - Look for token privilege abuse, AlwaysInstallElevated, or misconfigured DLL service loads.
---

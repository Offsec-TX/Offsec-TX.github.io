---
testcase: Miscellaneous Techniques - Always Install Elevated
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Check registry settings to determine if AlwaysInstallElevated is enabled:
    - Run: `reg query HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Installer`
    - Run: `reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer`
    - Confirm that AlwaysInstallElevated is set to 1 in both locations.
  - Prepare a malicious MSI payload (e.g., using msfvenom).
  - Upload the MSI file to the target system.
  - Start a listener on the attacker's machine (e.g., with netcat).
  - Execute the MSI on the target using: `msiexec /i <path_to_msi> /quiet /qn /norestart`
  - Confirm SYSTEM-level access by running `whoami` in the obtained shell.
  - Review the risk posed by AlwaysInstallElevated and recommend disabling the setting in both registry locations to mitigate.
---

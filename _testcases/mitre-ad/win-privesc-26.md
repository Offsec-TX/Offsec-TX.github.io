---
testcase: Interacting with Users - Process Command Lines
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Deploy a script to monitor process command lines at regular intervals.
  - Review detected changes for credential strings (e.g., commands containing passwords or authentication details).
  - If credentials are found, attempt to use them for lateral movement or privilege escalation.
  - Example PowerShell script to monitor process command lines:

    ```powershell
    while ($true) {
      $process = Get-WmiObject Win32_Process | Select-Object CommandLine
      Start-Sleep 1
      $process2 = Get-WmiObject Win32_Process | Select-Object CommandLine
      Compare-Object -ReferenceObject $process -DifferenceObject $process2
    }
    ```
---

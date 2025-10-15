---
testcase: Pillaging - Enumerate Installed Applications
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - List installed applications using command prompt and directories:
    - Run: `dir "C:\Program Files"` and `dir "C:\Program Files (x86)"`
  - Alternatively, gather details from Windows registry using PowerShell:
    - Run:
      ```powershell
      $INSTALLED = Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, InstallLocation
      $INSTALLED += Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, InstallLocation
      $INSTALLED | ?{ $_.DisplayName -ne $null } | sort-object -Property DisplayName -Unique | Format-Table -AutoSize
      ```
  - Analyze the results for interesting or unknown applications that might store credentials or business-sensitive data.
---

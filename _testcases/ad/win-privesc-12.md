---
testcase: UAC DLL Hijack via SystemPropertiesAdvanced
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://github.com/hfiref0x/UACME
how-to-test: |
  1. On target, verify UAC is enabled and at highest ConsentPromptBehaviorAdmin level.
  2. Host a malicious srrstr.dll containing a reverse shell payload on an attacker HTTP server.
  3. Download srrstr.dll to %LocalAppData%\Microsoft\WindowsApps on the target.
  4. Execute rundll32 shell32.dll,Control_RunDLL %LocalAppData%\Microsoft\WindowsApps\srrstr.dll to test initial load.
  5. Kill any existing rundll32.exe processes.
  6. Launch C:\Windows\SysWOW64\SystemPropertiesAdvanced.exe to trigger auto-elevation and obtain an elevated shell.
---

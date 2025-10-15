---
testcase: Pillaging - Abusing Instant Messaging Clients via Cookie Theft
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Identify installed instant messaging clients (e.g., Slack, Teams).
  - Obtain the browser cookie database:
    - For Firefox: `cookies.sqlite` (typically in `$env:APPDATA\Mozilla\Firefox\Profiles\*.default-release\`)
    - For Chrome: `Cookies` or `Network\Cookies` (typically in `$env:LOCALAPPDATA\Google\Chrome\User Data\Default\`)
  - Use PowerShell to copy the cookie database:
    - Firefox:
      ```powershell
      copy $env:APPDATA\Mozilla\Firefox\Profiles\*.default-release\cookies.sqlite .
      ```
    - Chrome:
      ```powershell
      copy "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Network\Cookies" .
      ```
  - Extract cookies using a suitable tool (e.g., cookieextractor.py for Firefox, SharpChromium or Invoke-SharpChromium for Chromium-based browsers).
  - Use a browser extension (e.g., Cookie-Editor) to load the extracted cookies.
  - Access the IM client web interface (e.g., Slack, Teams) and search for credentials or sensitive information in messages or files.
---

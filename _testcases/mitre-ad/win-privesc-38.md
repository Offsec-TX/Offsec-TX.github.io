---
testcase: Miscellaneous Techniques - CVE-2019-1388 (Chrome browser SYSTEM Breakout)
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Obtain a vulnerable binary (e.g., hhupd.exe signed by Microsoft).
  - Run the binary as administrator to trigger a UAC prompt.
  - In the elevated prompt, open the publisher's certificate and look for a clickable hyperlink in the "Issued By" field.
  - Click the hyperlink to launch a browser as SYSTEM.
  - In the browser, right-click and select "View page source".
  - In the source tab, right-click and choose "Save as".
  - In the "Save As" dialog, enter a path such as C:\Windows\System32\cmd.exe (or powershell.exe) to overwrite and execute a shell as SYSTEM.
  - Verify SYSTEM-level access by running whoami in the new shell.
  - Note: GUI access is required for this attack, and the presence of a clickable URL in the certificate is essential for exploitation.
---

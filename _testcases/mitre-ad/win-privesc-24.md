---
testcase: Citrix Environment Breakout & Privilege Escalation
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Access the Citrix environment using valid credentials and download the launch.ica file to connect to the Citrix desktop.
  - Launch a desktop application (e.g., MS Paint) and use the File > Open dialog to access the Windows file dialog box.
  - In the dialog, set File-Type to All Files and attempt to browse local user folders using UNC paths (e.g., \\127.0.0.1\c$\users\<username>).
  - Set up an SMB server (e.g., using smbserver.py) on an attacker-controlled machine.
  - In the Citrix session, use the file dialog to connect to the SMB share (e.g., \\<attacker_IP>\share) and verify the ability to list and execute files.
  - Transfer and execute binaries (e.g., a custom payload) from the SMB share to gain command execution within the Citrix environment.
  - Use the obtained shell to copy privilege escalation scripts (e.g., PowerUp.ps1, Bypass-UAC.ps1, custom batch files) from the SMB share.
  - Run privilege escalation checks and exploits (e.g., AlwaysInstallElevated, UAC bypass) to attempt to gain elevated privileges.
  - Verify elevated access by checking access to restricted folders (e.g., Administrator Desktop) and confirming privileges with commands like whoami /priv and whoami /all.
---

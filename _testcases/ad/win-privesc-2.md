---
testcase: Check for required token privileges (SeImpersonate and SeAssignPrimaryToken)
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://forum.hackthebox.com/t/windows-privilege-escalation-seimpersonate-sql-dev-does-not-have-token-permission/269721
  - https://notes.dollarboysushil.com/windows-privilege-escalation/user-privileges/seimpersonateprivilege-and-seassignprimarytoken
how-to-test: |
  **Enumeration:**
  1. Run `whoami /priv` to check that SeImpersonate and SeAssignPrimaryToken are enabled.
  2. Note the Windows version to decide which tool to use.

  **Exploitation:**
  3. Select the proper tool based on the OS:
     - **JuicyPotato** for Windows 10 (up to build 1809) or Windows Server 2016.
     - **RoguePotato** or **PrintSpoofer** for Windows Server 2019 and newer.
     - **SweetPotato** for modern systems that require multiple exploit methods.
  4. If using PrintSpoofer, verify that the Print Spooler service is running.
  5. Run the chosen exploit with your payload (e.g., `-p "C:\Windows\System32\cmd.exe"` or a reverse shell).
  6. Confirm the elevated context by running `whoami` after exploitation.
---
---
testcase: Check whether AppLocker is in place to restrict the enumeration
platforms: 
  - AD
  - Windows
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/applocker/applocker-overview
attack_types:
  - PrivEsc
how-to-test: |
  1. **Verify AppLocker Configuration:**
     - Run the PowerShell command to fetch the effective AppLocker policy:
       ```
       Get-AppLockerPolicy -Effective | ConvertTo-Json | Format-List
       ```
     - Confirm that rules are defined to restrict the execution of enumeration utilities.

  2. **Inspect Specific Rules:**
     - Check for execution block rules that target common enumeration tools or scripts.
     - Verify that the available rules match organizational security policies.

  3. **Simulate Enumeration Attempts:**
     - Attempt to run known enumeration commands or utilities that should be restricted.
     - Observe whether the application launch is blocked by AppLocker.

  4. **Review System Logs:**
     - Open the Event Viewer.
     - Navigate to **Applications and Services Logs > Microsoft > Windows > AppLocker** and review the "EXE and DLL" log.
     - Confirm that AppLocker generated denial events for the attempted enumeration.

  5. **Document Results:**
     - Record the outputs of the PowerShell command and the results of the enumeration attempts.
     - Note any discrepancies or gaps in the AppLocker policy
---
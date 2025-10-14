---
testcase: Vulnerable Service Privilege Escalation
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://www.rapid7.com/db/modules/exploit/windows/local/druva_insync_elevation
how-to-test: |
  1. Enumerate installed programs to identify potentially vulnerable services (e.g., wmic product get name).
  2. Use netstat or similar tools to confirm if any local services are listening on uncommon or high ports.
  3. Identify the process ID and confirm the service details using get-process -Id <PID> and get-service cmdlets.
  4. Prepare a proof-of-concept script to interact with the service's interface (e.g., RPC, named pipe, or TCP port).
  5. Modify the script to send payload commands (e.g., add local admin or download/execute a reverse shell).
  6. Start a server (e.g., Python HTTP server) to host any payloads on the attacker machine if needed.
  7. Set execution policy to bypass on the target if required: Set-ExecutionPolicy Bypass -Scope Process.
  8. Run the PoC script on the target to execute commands with elevated privileges.
  9. Start a listener (e.g., Netcat) on the attacker host to catch any reverse shell connections.
  10. Verify successful privilege escalation (e.g., whoami returns "nt authority\system").
---

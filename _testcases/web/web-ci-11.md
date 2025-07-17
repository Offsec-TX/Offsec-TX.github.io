---
testcase: Verify if the Web (HTTP/HTTPS) service discloses the underlying OS or executes commands when supplied with both Unix and Windows-specific inputs (e.g., uname -a, ver)
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
owasp-catgeory:
  - 
vulnerabilities:
  - Command injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/os-command-injection
---
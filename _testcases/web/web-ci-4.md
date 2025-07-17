---
testcase: Validate whether a time-delay injection (e.g., & ping -c 10 127.0.0.1 &) causes increased response time from the Web (HTTP/HTTPS) service, indicating potential blind command injection
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
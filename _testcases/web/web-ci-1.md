---
testcase: Check if injecting input with a shell command separator (e.g., & echo test &) into a Web (HTTP/HTTPS) service leads to the execution of arbitrary commands and reflected output in the response
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
owasp-catgeory:
  - 
vulnerabilities:
  - Command_injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/os-command-injection
---
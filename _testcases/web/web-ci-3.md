---
testcase: Check if a Web (HTTP/HTTPS) service processes inline command execution payloads such as `whoami` or $(whoami), resulting in altered responses that indicate command execution
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Command injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/os-command-injection
---
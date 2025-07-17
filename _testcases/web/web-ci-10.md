---
testcase: Ensure that the Web (HTTP/HTTPS) service enforces strict parameter validation by rejecting inputs outside the expected whitelist or range
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
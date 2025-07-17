---
testcase: Verify whether a Web (HTTP/HTTPS) service executes unintended OS commands when shell separators like ;, |, &&, or || are submitted via user input
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
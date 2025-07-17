---
testcase: Advanced SSRF (Bypassing Protections, Open Redirects) - Assess if open redirects can be chained with SSRF in the Web (HTTP/HTTPS) service, where a redirect from a trusted domain eventually leads to a restricted internal address
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

---
testcase: Advanced SSRF (Bypassing Protections, Open Redirects) - Verify that the Web (HTTP/HTTPS) service enforces domain validation and is not susceptible to complex redirection chains that access protected resources
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

---
testcase: SSRF via Indirect Parameters or Partial URLs - Test whether path fragments or hostname-only parameters in the Web (HTTP/HTTPS) service can be manipulated to build complete SSRF payloads using protocol, port, or path injection
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

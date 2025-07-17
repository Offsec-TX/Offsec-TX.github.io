---
testcase: Blind SSRF Detection - Validate that the Web (HTTP/HTTPS) service does not process URLs received in headers (e.g., Referer) in a way that could trigger server-initiated outbound requests
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

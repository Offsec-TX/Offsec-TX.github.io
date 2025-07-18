---
testcase: SSRF via Indirect Parameters or Partial URLs - Ensure that the Web (HTTP/HTTPS) service properly assembles and validates the final request URL before issuing server-side requests to avoid manipulation
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - SSRF
services:
  - WEB
references:
  - https://portswigger.net/web-security/ssrf
  - https://portswigger.net/web-security/ssrf/url-validation-bypass-cheat-sheet
---

---
testcase: Basic SSRF Vulnerability - Check if the Web (HTTP/HTTPS) service returns or exposes data fetched from internal or external resources, indicating the success of a server-side request
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

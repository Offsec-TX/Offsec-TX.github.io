---
testcase: Filter Circumvention - Verify whether obfuscated, encoded, or case-insensitive variants of blocked keywords (e.g., %31%32%37.0.0.1, LocalHost) bypass input filters in the Web (HTTP/HTTPS) service
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

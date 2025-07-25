---
testcase: SSRF Against Internal and Back-End Systems - Assess whether the Web (HTTP/HTTPS) service allows HTTP requests to private IP ranges (e.g., 10.0.0.1, 192.168.0.68), potentially exposing internal management interfaces
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

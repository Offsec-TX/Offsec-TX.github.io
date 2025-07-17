---
testcase: SSRF Against Internal and Back-End Systems - Validate if alternate representations of localhost (e.g., 2130706433, 017700000001, 127.1) are accepted by the Web (HTTP/HTTPS) service to bypass blacklist filters and reach loopback interfaces
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

---
testcase: Blind SSRF Detection - Test whether the Web (HTTP/HTTPS) service sends DNS or HTTP requests to a unique, attacker-controlled server (e.g., Burp Collaborator) even without a visible response—indicating blind SSRF
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

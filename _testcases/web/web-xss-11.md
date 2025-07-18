---
testcase: Content Security Policy (CSP) - Verify that CSP effectively blocks payload execution—try injecting <script>alert(2)</script>, inline event handlers, or javascript: URIs, and confirm browser denies script execution. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Cross site scripting XSS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cross-site-scripting
  - https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

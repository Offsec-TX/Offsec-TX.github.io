---
testcase: DOM-based XSS - Verify that dynamic DOM updates using user input do not allow payloads such as img src=x onerror=alert(1) to trigger code execution. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XSS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cross-site-scripting
  - https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

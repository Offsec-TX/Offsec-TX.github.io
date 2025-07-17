---
testcase: Port Scanning and Protocol Testing - Check if input to the Web (HTTP/HTTPS) service can be used to scan internal ports or test other protocols (e.g., http://127.0.0.1:22/, ftp://localhost/) by observing error messages, timing delays, or differences in response
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

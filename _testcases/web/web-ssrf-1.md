---
testcase: Basic SSRF Vulnerability - Check if user-supplied input in the Web (HTTP/HTTPS) service can trigger the server to initiate HTTP requests to arbitrary destinations by altering a URL parameter
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
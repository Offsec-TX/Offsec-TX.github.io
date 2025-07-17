---
testcase: Platform Misconfiguration and HTTP Method Weaknesses - Verify that all HTTP methods in the Web (HTTP/HTTPS) service are equally protected, and switching methods doesn’t bypass access restrictions
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Access control
services:
  - WEB
references:
  - https://portswigger.net/web-security/access-control
---
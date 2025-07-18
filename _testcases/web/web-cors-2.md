---
testcase: Basic Policy and Header Exposure - Verify that sensitive endpoints do not expose CORS headers to arbitrary origins or reflect the Origin request header without validation, as this can allow any site to access protected resources. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - CORS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cors
---

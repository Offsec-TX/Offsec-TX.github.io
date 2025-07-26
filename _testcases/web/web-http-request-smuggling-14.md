---
testcase: HTTP/2 Downgrade Vectors - Verify if these cause request queue desync at HTTP/1 backends and can lead to H2.CL or H2.TE vulnerabilities. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP request smuggling
services:
  - WEB
references:
  - https://portswigger.net/web-security/request-smuggling
---

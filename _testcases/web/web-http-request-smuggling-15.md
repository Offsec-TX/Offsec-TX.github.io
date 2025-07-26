---
testcase: HTTP/2 Downgrade Vectors - Validate that such downgrading is disallowed and that any HTTP/2 request resulting in ambiguity is rejected or fails gracefully. Web (HTTP/HTTPS) service
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

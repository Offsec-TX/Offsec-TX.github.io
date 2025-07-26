---
testcase: Multi-Hop and Proxy Scenarios - Verify connection reuse and state propagation; send multiple different Host or custom headers and see which are respected on subsequent requests. Web (HTTP/HTTPS) service
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

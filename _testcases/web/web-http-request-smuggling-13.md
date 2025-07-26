---
testcase: HTTP/2 Downgrade Vectors - Check for HTTP/2→HTTP/1 downgrading by sending HTTP/2 requests with ambiguous or conflicting Content-Length headers or forbidden Transfer-Encoding headers. Web (HTTP/HTTPS) service
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

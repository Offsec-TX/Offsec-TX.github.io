---
testcase: CL.TE and TE.CL Variants - Validate normal backend behavior for TE.CL by starting with Transfer-Encoding; chunked and then including a smaller Content-Length, observing if the backend waits for more data. Web (HTTP/HTTPS) service
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

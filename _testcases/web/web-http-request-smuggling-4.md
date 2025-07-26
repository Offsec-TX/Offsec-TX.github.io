---
testcase: CL.TE and TE.CL Variants - Check for CL.TE vulnerabilities by submitting a request containing both headers (Content-Length: <n>, Transfer-Encoding: chunked) and a body ending with 0\r\n\r\nSMUGGLED. Web (HTTP/HTTPS) service
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

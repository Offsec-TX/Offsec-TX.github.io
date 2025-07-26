---
testcase: CL.TE and TE.CL Variants - Verify if responses are delayed, or “leftover” bytes in the body are treated as a new request by the backend, revealing a desynchronization. Web (HTTP/HTTPS) service
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

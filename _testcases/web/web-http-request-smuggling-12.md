---
testcase: Timing and Differential Response - Validate that genuine multi-client/server setups receive each response in full, rather than missing, swapped, or delayed replies. Web (HTTP/HTTPS) service
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

---
testcase: Basic Request Boundary Agreement - Check how different combinations of Content-Length and Transfer-Encoding headers are parsed on the server by sending both in a single request (e.g., both Content-Length and Transfer-Encoding; chunked). Web (HTTP/HTTPS) service
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

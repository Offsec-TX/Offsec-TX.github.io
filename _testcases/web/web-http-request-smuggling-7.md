---
testcase: TE.TE Obfuscation - Check server tolerance by sending obfuscated Transfer-Encoding headers (e.g., Transfer-Encoding : chunked, Transfer-Encoding:[tab]chunked, Transfer-Encoding: xchunked). Web (HTTP/HTTPS) service
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

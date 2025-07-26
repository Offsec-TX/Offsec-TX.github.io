---
testcase: TE.TE Obfuscation - Verify if some variants bypass frontend parsing but are interpreted by the backend, indicating vulnerable TE.TE desync handling. Web (HTTP/HTTPS) service
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

---
testcase: TE.TE Obfuscation - Validate server parsing against all RFC-allowed and non-standard variations—no non-standard/obfuscated TE headers should be accepted unless both frontend and backend are synchronized. Web (HTTP/HTTPS) service
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

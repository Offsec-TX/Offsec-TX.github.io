---
testcase: Detection of Template Parsing - Validate that no user input containing valid template expressions (e.g., {{config}}) appears in the response without being sanitized or treated as data. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - SSTI
services:
  - WEB
references:
  - https://portswigger.net/web-security/server-side-template-injection
---

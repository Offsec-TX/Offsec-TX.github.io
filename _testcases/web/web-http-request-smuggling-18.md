---
testcase: Exploit Primitives - Validate that reflected data or unintended responses (e.g., from password reset routes or other users’ data) cannot be triggered via request queue pollution. Web (HTTP/HTTPS) service
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

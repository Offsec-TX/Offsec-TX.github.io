---
testcase: Origin Handling and Whitelisting - Validate that the null origin (Origin; null) is not whitelisted unless purposely needed, as this can be abused via sandboxed frames or file URIs. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - CORS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cors
---

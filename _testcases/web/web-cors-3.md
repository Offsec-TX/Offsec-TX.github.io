---
testcase: Basic Policy and Header Exposure - Validate that the Access-Control-Allow-Origin value is a strictly defined set of trusted domains, never a wildcard (*) for authenticated services or API calls. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Cross origin resource sharing CORS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cors
---

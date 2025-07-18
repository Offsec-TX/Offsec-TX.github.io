---
testcase: Credentials and Sensitive Data - Validate that API endpoints with CORS enabled do not allow credentialed cross-origin requests from insecure or HTTP-only origins, which could enable compromise even when the main app is HTTPS. Web (HTTP/HTTPS) service
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

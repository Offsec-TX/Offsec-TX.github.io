---
testcase: Subdomain and Internal Network Controls - Validate internal APIs and admin endpoints to make sure CORS does not undesirably allow origin; *, which could be exploited from public internet sources on employee browsers. Web (HTTP/HTTPS) service
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

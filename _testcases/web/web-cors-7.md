---
testcase: Credentials and Sensitive Data - Check if Access-Control-Allow-Credentials; true is set and, if so, verify that it is only enabled for specific, trusted origins—not for * or reflected origins—otherwise, sensitive data could be exposed to attackers. Web (HTTP/HTTPS) service
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

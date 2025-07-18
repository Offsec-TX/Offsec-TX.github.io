---
testcase: Origin Handling and Whitelisting - Check how the server behaves when receiving requests with various Origin headers, including random, malicious, or null, to verify if the origin is being trusted or blindly reflected in the response. Web (HTTP/HTTPS) service
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

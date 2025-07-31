---
testcase: Business Logic - Verify that password reset, user activation, or other important links use a fixed/predefined host, not user input or the Host header value. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP Host header
services:
  - WEB
references:
  - https://portswigger.net/web-security/host-header
---

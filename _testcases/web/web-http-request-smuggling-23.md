---
testcase: Web Cache and Cross-User Exploitation - Verify that sensitive responses (e.g., those related to sessions or users) are never cached due to backend/frontend desync. Web (HTTP/HTTPS) service
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

---
testcase: WebSocket Connection and Protocol Security - Check whether the application is using wss:// (WebSocket over TLS) and verify that all sensitive data is transmitted only over encrypted channels, never via unprotected ws://. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - WebSockets
services:
  - WEB
references:
  - https://portswigger.net/web-security/websockets
---

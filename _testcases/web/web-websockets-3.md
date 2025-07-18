---
testcase: Handshake & Origin Handling - Check for the presence and correctness of the Origin header during the WebSocket handshake; attempt connections from multiple origins to see if unauthorized cross-origin handshakes are permitted. Web (HTTP/HTTPS) service
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

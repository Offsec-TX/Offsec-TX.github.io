---
testcase: Token & Code Leakage - Validate that sensitive tokens/codes aren’t leaked via Referer headers, web messages, or errors—even when XSS or HTML injection might occur. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - OAuth
services:
  - WEB
references:
  - https://portswigger.net/web-security/oauth
---

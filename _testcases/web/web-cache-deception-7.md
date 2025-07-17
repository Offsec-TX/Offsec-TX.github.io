---
testcase: Cache Behavior and Headers - Validate that dynamic responses in the Web (HTTP/HTTPS) service always include correct Cache-Control and related headers as per security policy to avoid caching sensitive information
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Web cache deception
services:
  - WEB
references:
  - https://portswigger.net/web-security/web-cache-deception
---

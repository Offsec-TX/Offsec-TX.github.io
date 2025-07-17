---
testcase: Cache Testing Process - Confirm potential vulnerabilities in the Web (HTTP/HTTPS) service by repeating crafted requests; if the second response results in a cache hit, it may indicate that sensitive data was cached and could be exposed
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

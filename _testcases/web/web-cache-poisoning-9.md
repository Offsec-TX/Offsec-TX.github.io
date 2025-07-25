---
testcase: Poison the Cache - Validate that poisoned entries persist across expected TTL and serve identical content to other users without re-requesting the origin. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Web cache poisoning
services:
  - WEB
references:
  - https://portswigger.net/web-security/web-cache-poisoning
---

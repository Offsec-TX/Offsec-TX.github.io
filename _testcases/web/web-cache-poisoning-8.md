---
testcase: Poison the Cache - Verify that poisoning via POST or “fat GET” (using body or X-HTTP-Method-Override) still caches under the normal GET key. Web (HTTP/HTTPS) service
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

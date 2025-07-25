---
testcase: Poison the Cache - Check that responses influenced by unkeyed inputs are cacheable (e.g., Cache-Control: public) and that subsequent requests yield X-Cache: hit. Web (HTTP/HTTPS) service
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

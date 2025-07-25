---
testcase: Exploit Query-Key Transformations - Validate normalization quirks by poisoning with unencoded payloads (e.g., param="><test>) and retrieving via encoded requests, confirming normalization-based hits. Web (HTTP/HTTPS) service
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

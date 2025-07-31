---
testcase: Elicit a Malicious Response - Validate that injecting cookies (e.g., Cookie; lang=pl) into unkeyed cookie headers can alter language-specific content and be reflected unsafely. Web (HTTP/HTTPS) service
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

---
testcase: Normalization and Path Traversal - Validate that encoded path traversal patterns (e.g., %2e%2e%2f, %2f%2e%2e%2f) in the Web (HTTP/HTTPS) service do not cause the origin server and cache to interpret the path differently, leading to cache deception
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

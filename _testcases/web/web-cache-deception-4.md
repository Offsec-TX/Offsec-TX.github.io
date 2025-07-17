---
testcase: URL Manipulation and Path Mapping - Validate that special characters or encoded sequences (e.g., ;, %00, %2e%2e%2f) in URLs to the Web (HTTP/HTTPS) service do not cause discrepancies between cache and origin server, leading to unsafe caching of dynamic data
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

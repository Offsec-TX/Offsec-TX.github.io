---
testcase: Detecting Entity Resolution - Validate that the Web (HTTP/HTTPS) service does not resolve or disclose data from external entities pointing to local files (e.g., file:///etc/passwd) in the response
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XXE injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

---
testcase: SSRF via XXE - Check whether defining external entities that reference internal network resources (e.g., http://127.0.0.1:80/) causes the Web (HTTP/HTTPS) service to perform SSRF-style requests, indicating a vulnerability
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

---
testcase: Static Directory and File-name-Based Rules - Verify that accessing dynamic endpoints through paths like /static/../profile or /assets/..%2fprofile does not cause the Web (HTTP/HTTPS) service to cache sensitive content under static file caching rules
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

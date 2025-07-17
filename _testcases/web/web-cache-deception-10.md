---
testcase: Static Directory and File-name-Based Rules - Check if accessing specific filenames like /profile%2f%2e%2e%2findex.html in the Web (HTTP/HTTPS) service results in the caching of sensitive content where only static content should be allowed
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

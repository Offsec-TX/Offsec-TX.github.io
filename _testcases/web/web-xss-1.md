---
testcase: Reflected XSS - Check every user input (query parameters, forms, headers) by injecting script payloads such as script alert('xss') script and observe if the payload appears unencoded in the immediate server response. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Cross site scripting XSS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cross-site-scripting
  - https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

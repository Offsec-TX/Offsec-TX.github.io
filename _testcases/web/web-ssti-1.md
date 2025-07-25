---
testcase: Detection of Template Parsing - Check for template syntax errors by injecting common markers ({{, {%, <%, ${, [[) into user-controlled inputs and observing server error messages or unusual output. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - SSTI
services:
  - WEB
references:
  - https://portswigger.net/web-security/server-side-template-injection
---

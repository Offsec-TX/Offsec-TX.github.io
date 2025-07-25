---
testcase: Context Enumeration and Engine Identification - Verify syntax-specific payloads (e.g., Twig’s {{7*7}}, Freemarker’s <#assign a=7*7>) ensuring only correct engine syntax is evaluated. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Server side template injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/server-side-template-injection
---

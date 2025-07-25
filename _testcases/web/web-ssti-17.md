---
testcase: Input Validation and Whitelisting - Verify that templating APIs are used in “escaped” or “safe” mode (e.g., Jinja2’s autoescape=True, Twig’s escape filters). Web (HTTP/HTTPS) service
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

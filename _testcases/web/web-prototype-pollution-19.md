---
testcase: Attempt Remote Code Execution (Server-Side) – Verify OOB interaction using values such as {"__proto__":{"shell":"vim","input":":!id\n"}}. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Prototype pollution
services:
  - WEB
references:
  - https://portswigger.net/web-security/prototype-pollution
---

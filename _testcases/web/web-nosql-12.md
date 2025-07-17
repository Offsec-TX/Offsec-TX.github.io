---
testcase: Operator Injection - Validate that the Web (HTTP/HTTPS) service does not allow query logic override through NoSQL operators, preventing privilege escalation, data leakage, or denial-of-service scenarios
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - NoSQL injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/nosql-injection
---

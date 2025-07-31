---
testcase: Authentication and Access Controls - Check if authentication in the Web (HTTP/HTTPS) service can be bypassed using injected NoSQL payloads (e.g., {"username"; {"$ne"; null}, "password"; {"$ne"; null}})
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - NoSQLi
services:
  - WEB
references:
  - https://portswigger.net/web-security/nosql-injection
---

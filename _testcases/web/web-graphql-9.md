---
testcase: Insecure Direct Object References (IDOR) - Verify that access control logic properly restricts queries like product(id; X) for non-public items or other users’ data. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - GraphQL
services:
  - WEB
references:
  - https://portswigger.net/web-security/graphql
---

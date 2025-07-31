---
testcase: Field-Level Security - Check that sensitive fields (e.g., user.password, token, internalNotes) are not accessible even when included in introspection or chained query operations. Web (HTTP/HTTPS) service
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

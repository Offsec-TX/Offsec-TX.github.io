---
testcase: Schema Leakage via Suggestions - Check error messages for auto-suggestions (e.g., “Did you mean ‘userId’?”) when querying invalid fields, to ensure schema hints are disabled. Web (HTTP/HTTPS) service
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

---
testcase: Authorization and Mutation Control - Check administrative mutations (e.g., createUser, deletePost) for enforcement of authentication and proper role-based access control by attempting to invoke them as an anonymous or low-privilege user. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - GraphQL API vulnerabilities
services:
  - WEB
references:
  - https://portswigger.net/web-security/graphql
---

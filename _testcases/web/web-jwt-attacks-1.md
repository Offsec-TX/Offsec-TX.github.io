---
testcase: Signature Verification Issues – Check if the application verifies JWT signatures at all by modifying claims (e.g., role, isAdmin) and rejoining with a random or no signature. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - JWT
services:
  - WEB
references:
  - https://portswigger.net/web-security/jwt
---

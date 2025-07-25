---
testcase: Identify Deserialization Points - Check for every endpoint and input (cookies, POST bodies, URL parameters) that accepts serialized data patterns (e.g., PHP O:…;, Java rO0…, Ruby YAML objects). Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Insecure deserialization
services:
  - WEB
references:
  - https://portswigger.net/web-security/deserialization/
---

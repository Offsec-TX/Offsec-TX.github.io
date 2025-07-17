---
testcase: General Input Handling - Check if input fields, parameters, or API request bodies in the Web (HTTP/HTTPS) service accept special characters (e.g., ', ", /, $, [, ], {, }) or NoSQL operators like $ne, $eq, $where, resulting in errors or altered behavior
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

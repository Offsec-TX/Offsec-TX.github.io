---
testcase: Operator Injection - Check if injecting NoSQL query operators (e.g., $ne, $in, $regex, $gt) in JSON/XML/URL parameters causes the Web (HTTP/HTTPS) service to unintentionally expose or filter sensitive data
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

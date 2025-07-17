---
testcase: Query Logic Manipulation - Check if injecting logical expressions such as ' || 1 == 1 or using variations like ' && 0 && ' versus ' && 1 && ' in the Web (HTTP/HTTPS) service results in logic manipulation or access to unauthorized data
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

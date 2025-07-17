---
testcase: Query Logic Manipulation - Verify that null byte injections (e.g., %00) do not truncate or alter database query execution in the Web (HTTP/HTTPS) service, potentially bypassing application logic
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

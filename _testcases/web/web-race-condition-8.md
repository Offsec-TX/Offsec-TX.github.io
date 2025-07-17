---
testcase: Endpoint Concurrency Consistency - Ensure that actions from different but related endpoints on the Web (HTTP/HTTPS) service (e.g., update and delete on the same resource) do not cause conflicts or privilege escalation when done simultaneously
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Race conditions
services:
  - WEB
references:
  - https://portswigger.net/web-security/race-conditions
---

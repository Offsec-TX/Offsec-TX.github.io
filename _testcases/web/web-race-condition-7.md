---
testcase: Concurrent Parameter Change - Test whether concurrent updates to sensitive parameters (e.g., password, role, payment method) on the Web (HTTP/HTTPS) service result in inconsistent states or successful manipulation of multiple attributes at once
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

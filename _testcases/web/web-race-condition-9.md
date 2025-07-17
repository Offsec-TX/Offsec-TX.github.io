---
testcase: Connection Warm-up Race - Investigate whether pre-warming connections (e.g., via dummy requests or pre-flight checks) alters how requests are prioritized or executed by the Web (HTTP/HTTPS) service, possibly leading to race vulnerabilities
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

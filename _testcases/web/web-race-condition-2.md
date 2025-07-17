---
testcase: Transaction Concurrency - Verify that concurrent submission of fund transfers, order placements, or review submissions in the Web (HTTP/HTTPS) service cannot bypass application limits (e.g., double ordering, fund overdrawing)
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

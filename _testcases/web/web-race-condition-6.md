---
testcase: Session Handling Race - Verify that the session management logic in the Web (HTTP/HTTPS) service properly serializes or locks simultaneous requests to prevent conflicts, duplication, or state corruption for the same user
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

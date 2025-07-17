---
testcase: Uninitialized Object Access - Check if newly created objects like users, API tokens, or resources in the Web (HTTP/HTTPS) service can be accessed or manipulated prematurely through concurrent creation and access requests
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

---
testcase: Rate Limit Bypass - Check if sending multiple simultaneous requests to the Web (HTTP/HTTPS) service allows bypassing rate limits or CAPTCHA restrictions before the server-side rate-limiting logic is enforced
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

---
testcase: Parallel Exploitation Tool Use - Use tools like Turbo Intruder, Burp Intruder, or custom scripts to send high-speed, concurrent requests to the Web (HTTP/HTTPS) service, validating if single-use actions (e.g., promo redemption) are executed more than once due to race
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

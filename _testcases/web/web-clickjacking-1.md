---
testcase: HTTP Header and Policy Assessment - Check that every sensitive or authenticated endpoint responds with the X-Frame-Options HTTP header set to DENY or SAMEORIGIN (never absent or misconfigured). Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Clickjacking
services:
  - WEB
references:
  - https://portswigger.net/web-security/clickjacking
---

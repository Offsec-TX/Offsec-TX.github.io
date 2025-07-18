---
testcase: Identifying CSRF Attack Surface - Verify if GET requests perform state-changing actions, such as deletions or updates. These should never be possible via GET—if they are, this indicates a critical flaw. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - CSRF
services:
  - WEB
references:
  - https://portswigger.net/web-security/csrf
---

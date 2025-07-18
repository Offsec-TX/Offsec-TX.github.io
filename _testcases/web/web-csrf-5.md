---
testcase: Form and Request Analysis - Verify that tokens are included in all state-changing form actions, and that absence, reuse, or use of tokens tied to a different session/user results in a failed request. Web (HTTP/HTTPS) service
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

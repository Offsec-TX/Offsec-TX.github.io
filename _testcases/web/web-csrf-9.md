---
testcase: Enforcement and Bypass Testing - Validate whether accepting tokens in multiple places (form field, header, cookie) introduces weaknesses such as "double submit token" bypasses, and that tokens are always tied to the session. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Cross site request forgery CSRF
services:
  - WEB
references:
  - https://portswigger.net/web-security/csrf
---

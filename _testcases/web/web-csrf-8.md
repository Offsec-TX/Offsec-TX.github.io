---
testcase: Enforcement and Bypass Testing - Verify that the CSRF token is consistently validated server-side for all HTTP methods (including non-POST, such as GET, DELETE, etc.)—not just POST requests. Web (HTTP/HTTPS) service
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

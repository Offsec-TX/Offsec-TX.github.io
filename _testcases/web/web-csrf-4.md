---
testcase: Form and Request Analysis - Check all form submissions and sensitive POST/PUT/DELETE requests to see if a unique CSRF protection token is present in each request, either as a hidden form input or HTTP header. Web (HTTP/HTTPS) service
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

---
testcase: Cookie and Browser Policy Evaluation - Validate that server logic does not rely solely on the Referer or Origin headers for CSRF protection, and if so, test bypass techniques (missing, spoofed, or cross-origin Referers). Web (HTTP/HTTPS) service
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

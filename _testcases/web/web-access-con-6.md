---
testcase: Vertical Privilege Escalation - Validate that privileged actions remain protected when switching HTTP methods (e.g., using GET instead of POST) in the Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Access control
services:
  - WEB
references:
  - https://portswigger.net/web-security/access-control
---
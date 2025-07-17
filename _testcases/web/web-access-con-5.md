---
testcase: Vertical Privilege Escalation - Verify that modifying parameters, cookies, or hidden fields (e.g., role=admin or isAdmin=true) in the Web (HTTP/HTTPS) service does not grant elevated privileges
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
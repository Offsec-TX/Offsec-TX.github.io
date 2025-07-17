---
testcase: Horizontal Privilege Escalation - Check if changing user-controllable parameters (e.g., id=123 to id=456) in the Web (HTTP/HTTPS) service results in unauthorized access to other users’ data (IDOR testing)
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
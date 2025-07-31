---
testcase: Error-Based Type Coercion – Use ' AND 1=CONVERT(int, @@version)-- or equivalent error-forcing payloads to determine whether Web (HTTP/HTTPS) service leaks detailed database error messages
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - SQLi
services:
  - WEB
references:
  - https://portswigger.net/web-security/sql-injection
  - https://portswigger.net/web-security/sql-injection/cheat-sheet
---

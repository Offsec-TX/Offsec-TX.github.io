---
testcase: Cross-Table UNION Exploit – Test if valid column-count UNION payloads (e.g., ' UNION SELECT username, password FROM users--) succeed, indicating dangerous UNION-based SQL injection
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - SQL injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/sql-injection
  - https://portswigger.net/web-security/sql-injection/cheat-sheet
---

---
testcase: SQL Meta Character Injection – Test all input points (URL params, form fields, headers, cookies) in Web (HTTP/HTTPS) service with characters like ', ", ;, --, and observe for SQL errors (e.g., syntax error, unclosed quotation mark)
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

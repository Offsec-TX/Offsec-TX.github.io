---
testcase: Boolean Blind Inference – Test payloads like ' AND SUBSTRING((SELECT version()), 1, 1) = 'M'-- to observe conditional changes in response (e.g., different error message, redirect, page content), even if no data is visibly returned
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

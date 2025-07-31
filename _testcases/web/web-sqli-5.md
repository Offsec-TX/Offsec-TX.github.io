---
testcase: Time Delay Payloads – Inject payloads like ' OR IF(1=1, SLEEP(5), 0)-- (MySQL), ' ;WAITFOR DELAY '00:00:05'-- (MSSQL) in Web (HTTP/HTTPS) service and observe for abnormal delay, indicating blind time-based SQL injection
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

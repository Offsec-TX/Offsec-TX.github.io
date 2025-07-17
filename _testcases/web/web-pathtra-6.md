---
testcase: Evaluate whether the Web (HTTP/HTTPS) service is vulnerable to null byte injection that allows traversal beyond restricted file types (../../../etc/passwd%00.txt)
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox

services:
  - WEB
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-web/index.html
---
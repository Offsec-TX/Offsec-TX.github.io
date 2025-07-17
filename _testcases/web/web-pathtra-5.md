---
testcase: Confirm that the Web (HTTP/HTTPS) service properly validates the beginning of file paths and prevents traversal through crafted input (/static/../../../etc/passwd)
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
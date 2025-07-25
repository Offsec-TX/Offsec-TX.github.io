---
testcase: Assess whether the Web (HTTP/HTTPS) service incorrectly decodes input multiple times, allowing traversal bypass (%2e%2e/etc/passwd)
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Path traversal
services:
  - WEB
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-web/index.html
---
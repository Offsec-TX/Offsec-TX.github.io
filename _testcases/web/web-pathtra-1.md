---
testcase: Validate that the Web (HTTP/HTTPS) service prevents basic directory traversal attacks during authentication or file access (../../../etc/passwd)
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
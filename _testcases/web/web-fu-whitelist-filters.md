---
testcase: Test the Web (HTTP/HTTPS) service for file upload vulnerabilities by bypassing whitelist filters using double extensions (e.g., shell.jpg.php) or reverse extensions (e.g., shell.php.jpg)
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

services:
  - WEB
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-web/index.html
---
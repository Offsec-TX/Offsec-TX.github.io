---
testcase: Ensure that the Web (HTTP/HTTPS) service does not expose debug or diagnostic pages that reveal environment details, authentication tokens, or system internals
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Information disclosure
services:
  - WEB
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-web/index.html
---
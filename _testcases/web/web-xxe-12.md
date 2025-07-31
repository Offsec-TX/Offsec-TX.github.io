---
testcase: Source Code and Platform Review - Validate that the XML parser libraries used by the Web (HTTP/HTTPS) service (e.g., Java, .NET, Python, PHP) are configured to disable DTD processing and external entity resolution at the code or library level
platforms: 
  - Web
  - Network
methodology: 
  - WhiteBox
vulnerabilities:
  - XXE
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

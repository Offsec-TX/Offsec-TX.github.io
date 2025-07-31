---
testcase: Input & Parser Handling - Verify that changing the Content-Type header to application/xml from other types (e.g., application/x-www-form-urlencoded) in the Web (HTTP/HTTPS) service results in either safe XML parsing or an error—not insecure processing
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XXE
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

---
testcase: Cache Testing Process - Ensure that each web cache deception test against the Web (HTTP/HTTPS) service includes a cachebuster (e.g., unique query param) to force fresh server-side evaluation, preventing interference from prior cached results
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Web cache deception
services:
  - WEB
references:
  - https://portswigger.net/web-security/web-cache-deception
---

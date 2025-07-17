---
testcase: Delimiter and Encoding Discrepancies - Check if encoded delimiters (e.g., /profile%3bwcd.css, /profile%00foo.js) in requests to the Web (HTTP/HTTPS) service are interpreted differently by the cache and origin server, potentially exposing dynamic data via unsafe caching
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

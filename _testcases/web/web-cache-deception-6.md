---
testcase: Cache Behavior and Headers - Verify that cache-control headers (Cache-Control: no-store, private) in the Web (HTTP/HTTPS) service are properly preventing user-specific or sensitive data from being cached
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

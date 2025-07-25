---
testcase: Dangling Markup Injection - Validate whether inserting payloads like " autofocus onfocus=alert(3) x=" or  script alert(4) script causes the DOM to be modified in a way that leads to XSS or HTML injection. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XSS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cross-site-scripting
  - https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
---

---
testcase: URL Manipulation and Path Mapping - Check if appending arbitrary path segments or extensions (e.g., /dashboard/non.js, /settings/users/listaaa.js) affects how the Web (HTTP/HTTPS) service or cache handles dynamic responses, particularly for sensitive content leakage
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

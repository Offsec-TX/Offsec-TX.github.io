---
testcase: DOM-based XSS - Check all client-side code for use of unsafe JavaScript sinks (like innerHTML, outerHTML, document.write) where input from URL, cookies, or messages (location.hash, location.search, postMessage) can be inserted unsanitized. Web (HTTP/HTTPS) service
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

---
testcase: Dangling Markup Injection - Check for inclusion of user input in partially open tags, attributes, or within raw HTML where the input can "break out" of the intended context, e.g., <img alt="USERINPUT">. Web (HTTP/HTTPS) service
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

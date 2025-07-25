---
testcase: Stored XSS - Check all persistent user input locations (comments, profiles, messages, chat, etc.) for storage and subsequent display of injected scripts—save a harmless payload and reload/examine the target page as another user. Web (HTTP/HTTPS) service
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

---
testcase: Code-Context Injection - Verify that attempts to inject closing delimiters followed by arbitrary HTML or directives (e.g., }}{%raw%}<img…>{%endraw%}) do not render or execute. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - SSTI
services:
  - WEB
references:
  - https://portswigger.net/web-security/server-side-template-injection
---

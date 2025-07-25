---
testcase: File Access and Path Traversal - Check if template directives can access server files or environment variables (e.g., {{config.__class__.__mro__.__subclasses__()}} in Python, ${T(java.lang.Runtime).getRuntime().exec('…')} in JSP). Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Server side template injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/server-side-template-injection
---

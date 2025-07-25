---
testcase: Remote Code Execution Primitives - Verify that using known RCE payloads (e.g., ${T(java.lang.Runtime).getRuntime().exec('id')}) does not result in command execution or error. Web (HTTP/HTTPS) service
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

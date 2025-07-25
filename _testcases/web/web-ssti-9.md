---
testcase: File Access and Path Traversal - Verify attempts to read sensitive templates or config files (e.g., {{ include('/etc/passwd') }}) are blocked or sanitized. Web (HTTP/HTTPS) service
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

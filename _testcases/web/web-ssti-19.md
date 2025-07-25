---
testcase: Sandbox and Runtime Constraints - Validate that attempts to import or reference dangerous modules (e.g., Python’s os, Java’s java.lang.Runtime) are forbidden at compile or render time. Web (HTTP/HTTPS) service
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

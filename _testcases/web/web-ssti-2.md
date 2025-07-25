---
testcase: Detection of Template Parsing - Verify that fuzzing with a simple evaluation payload (e.g., {{7*7}}, {% 7*7%}) does not evaluate server-side and instead is rendered literally or escaped. Web (HTTP/HTTPS) service
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

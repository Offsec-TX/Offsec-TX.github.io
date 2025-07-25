---
testcase: Plaintext Expression Evaluation - Verify that similar injections of string concatenations or function calls (e.g., {{"A"+"B"}}, <%="A".upcase%>) are not executed on the server. Web (HTTP/HTTPS) service
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

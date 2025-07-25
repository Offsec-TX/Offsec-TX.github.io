---
testcase: Plaintext Expression Evaluation - Check whether injecting a safe arithmetic expression in user input (e.g., {{4+4}} or ${4+4}) results in its evaluation (e.g., “8”), indicating server-side template execution. Web (HTTP/HTTPS) service
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

---
testcase: Code-Context Injection - Check for injection points where user input is directly concatenated into template code (e.g., render("Hello " + userInput)), by attempting to break out of the expression context (}}<script>alert(1)</script>{{). Web (HTTP/HTTPS) service
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

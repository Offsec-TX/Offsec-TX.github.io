---
testcase: Business-Logic and Control-Flow Manipulation - Verify that injecting a truthy conditional (e.g., {{% if true %}}ADMIN{{% endif %}}) cannot elevate privileges or reveal admin-only content. Web (HTTP/HTTPS) service
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

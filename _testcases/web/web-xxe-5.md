---
testcase: File Retrieval & Data Disclosure - Check whether submitting an XML payload referencing sensitive files via external entities (e.g., <!ENTITY test SYSTEM "file:///etc/passwd">) causes the Web (HTTP/HTTPS) service to return server-side file contents
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XXE
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

---
testcase: Confirm that the Web (HTTP/HTTPS) service properly rejects or sanitizes input containing non-alphanumeric characters, whitespace, or common command separators
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Command injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/os-command-injection
---
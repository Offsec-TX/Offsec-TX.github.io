---
testcase: Test the Web (HTTP/HTTPS) service's input filtering mechanisms by attempting to bypass them using encoded, obfuscated, or malformed command injection payloads
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
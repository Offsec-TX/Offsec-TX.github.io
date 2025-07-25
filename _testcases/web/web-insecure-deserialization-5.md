---
testcase: Gadget Chain Detection - Verify out-of-band gadget chains (e.g., Java URLDNS, PHPGGC payloads) cannot trigger callbacks or delays—ensuring no known chain executes. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Insecure deserialization
services:
  - WEB
references:
  - https://portswigger.net/web-security/deserialization/
---

---
testcase: Error Handling & DoS Safeguards - Verify malformed or cyclic payloads are gracefully rejected without logging sensitive details, and that depth/size limits prevent resource exhaustion. Web (HTTP/HTTPS) service
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

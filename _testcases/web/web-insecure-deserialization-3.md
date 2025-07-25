---
testcase: Magic Method Abuse - Validate that deserialization magic methods (__wakeup, __destruct, Java readObject) never execute attacker-controlled data before strict validation. Web (HTTP/HTTPS) service
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

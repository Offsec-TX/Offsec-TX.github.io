---
testcase: Arbitrary Class Injection - Check that replacing the class name in serialized data with any other available class is rejected and never leads to unexpected object instantiation. Web (HTTP/HTTPS) service
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

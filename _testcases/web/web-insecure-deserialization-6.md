---
testcase: PHAR & File-Wrapper Protection (PHP) - Validate that using phar:// URIs on uploaded or controlled files does not cause deserialization of PHAR metadata. Web (HTTP/HTTPS) service
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

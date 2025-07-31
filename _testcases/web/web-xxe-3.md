---
testcase: Detecting Entity Resolution - Check if the Web (HTTP/HTTPS) service resolves simple internal XML entities by injecting a basic DTD (e.g., <!ENTITY demo "ENTITY_INJECTED">) and observing if the entity is reflected in the response
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

---
testcase: Attribute Manipulation - Verify you cannot edit obvious attributes in the serialized payload (e.g., toggling isAdmin, changing file paths) to escalate privileges or access files. Web (HTTP/HTTPS) service
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

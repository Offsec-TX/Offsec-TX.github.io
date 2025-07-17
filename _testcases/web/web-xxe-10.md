---
testcase: XInclude Attacks - Verify that submitting XML payloads using XInclude constructs (e.g., <xi:include href="file:///etc/passwd"/>) to the Web (HTTP/HTTPS) service does not result in the disclosure of local server files
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XXE injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

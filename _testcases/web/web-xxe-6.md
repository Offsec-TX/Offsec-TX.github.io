---
testcase: Blind XXE and Out-of-Band Detection - Verify that the XML parser used by the Web (HTTP/HTTPS) service does not resolve external entities referencing URLs controlled by an attacker (e.g., http://attacker.com/xxe), preventing OOB interactions
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

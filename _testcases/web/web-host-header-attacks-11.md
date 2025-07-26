---
testcase: Host Header Overrides / Smuggling - Check if X-Forwarded-Host, X-Host, X-Forwarded-Server, X-HTTP-Host-Override, or Forwarded headers are supported and affect back-end logic. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP Host header attacks
services:
  - WEB
references:
  - https://portswigger.net/web-security/host-header
---

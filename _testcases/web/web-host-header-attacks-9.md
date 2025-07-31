---
testcase: SSRF and Internal Routing - Check if you can set Host to internal domains or IPs (e.g., Host; admin.internal.local or Host; 127.0.0.1) and receive back internal content or observe DNS lookups to attacker-controlled domains. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP Host header
services:
  - WEB
references:
  - https://portswigger.net/web-security/host-header
---

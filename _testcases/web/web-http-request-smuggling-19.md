---
testcase: Multi-Hop and Proxy Scenarios - Check for parsing discrepancies between frontend (CDN/load balancer/reverse proxy) and backend servers in multi-hop chains by sending ambiguous headers and observing propagation. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP request smuggling
services:
  - WEB
references:
  - https://portswigger.net/web-security/request-smuggling
---

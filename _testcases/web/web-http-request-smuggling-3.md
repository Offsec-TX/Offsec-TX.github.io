---
testcase: Basic Request Boundary Agreement - Validate that all intermediary servers (proxies/load balancers) apply RFC rules consistently—that is, ignore Content-Length if Transfer-Encoding is present, or reject ambiguous requests. Web (HTTP/HTTPS) service
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

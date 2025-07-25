---
testcase: Identify Unkeyed Inputs - Check for unkeyed headers by submitting headers (e.g., X-Forwarded-Host, X-Forwarded-Proto, Cookie, Origin) and observing if they influence the response without affecting cache hits. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Web cache poisoning
services:
  - WEB
references:
  - https://portswigger.net/web-security/web-cache-poisoning
---

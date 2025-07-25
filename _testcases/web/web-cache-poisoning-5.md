---
testcase: Elicit a Malicious Response - Verify that injecting resource URLs via unkeyed headers (e.g., X-Forwarded-Host) can change <script src="...">, leading to malicious JS inclusion. Web (HTTP/HTTPS) service
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

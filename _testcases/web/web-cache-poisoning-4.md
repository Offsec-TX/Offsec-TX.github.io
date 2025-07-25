---
testcase: Elicit a Malicious Response - Check if reflecting unkeyed input into HTML (e.g., metadata URLs, script imports) allows injection of payloads such as <script>alert(1)</script>. Web (HTTP/HTTPS) service
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

---
testcase: Origin Handling and Whitelisting - Verify the implementation of domain and subdomain whitelisting to ensure regular expressions or prefix/suffix logic do not allow attacker-controlled origins like attacker-example.com or example.com.evil.com. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Cross origin resource sharing CORS
services:
  - WEB
references:
  - https://portswigger.net/web-security/cors
---

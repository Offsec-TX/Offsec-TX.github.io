---
testcase: Subdomain and Internal Network Controls - Check if access is granted to all subdomains or internal hostnames through overly broad policy; verify that unused or abandoned subdomains do not have permissive CORS rules that could be abused or lead to subdomain takeover. Web (HTTP/HTTPS) service
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

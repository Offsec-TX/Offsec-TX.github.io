---
testcase: Client and Redirect URI Handling - Validate attempts at open redirection, path traversal (../), subdomain/hostname spoofing, parameter pollution, and special URLs (localhost/equivalents) are rejected. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - OAuth authentication
services:
  - WEB
references:
  - https://portswigger.net/web-security/oauth
---

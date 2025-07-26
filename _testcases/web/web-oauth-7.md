---
testcase: Client and Redirect URI Handling - Verify that the redirect_uri parameter is always validated strictly byte-for-byte against a whitelist, not by prefix or loose matching. Web (HTTP/HTTPS) service
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

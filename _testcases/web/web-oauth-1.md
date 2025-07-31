---
testcase: Endpoint & Configuration Reconnaissance - Check for any /authorization, /token, /callback, /userinfo, /.well-known/oauth-authorization-server, or /.well-known/openid-configuration endpoints to confirm OAuth/OpenID presence and supported flows. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - OAuth
services:
  - WEB
references:
  - https://portswigger.net/web-security/oauth
---

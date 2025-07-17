---
testcase: Basic SSRF Vulnerability - Verify whether submitting internal IPs or loopback addresses (e.g., 127.0.0.1, localhost, 192.168.*.*) to the Web (HTTP/HTTPS) service causes it to connect to internal network resources
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Server side request forgery SSRF
services:
  - WEB
references:
  - https://portswigger.net/web-security/ssrf
  - https://portswigger.net/web-security/ssrf/url-validation-bypass-cheat-sheet
---

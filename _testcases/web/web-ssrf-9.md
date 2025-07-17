---
testcase: Filter Circumvention - Validate that the Web (HTTP/HTTPS) service's whitelist filters can resist URL parsing ambiguities (e.g., using fragments, credentials, subdomains, IPv6, or double-encoding techniques)
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

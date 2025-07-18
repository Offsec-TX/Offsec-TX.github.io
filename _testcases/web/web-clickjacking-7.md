---
testcase: Robustness and Consistency Across Environments - Check that all responses, including error pages and legacy routes, consistently return strong X-Frame-Options or equivalent CSP headers—not just main content pages. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Clickjacking
services:
  - WEB
references:
  - https://portswigger.net/web-security/clickjacking
---

---
testcase: General Endpoint and Response Handling - Check if dynamic endpoints in the Web (HTTP/HTTPS) service (e.g., user profile, dashboard) still return personalized content when a static file extension (e.g., .css, .js) is appended to the URL (e.g., /profile/wcd.css)
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Web cache deception
services:
  - WEB
references:
  - https://portswigger.net/web-security/web-cache-deception
---

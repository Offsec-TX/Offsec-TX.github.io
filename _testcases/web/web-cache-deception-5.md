---
testcase: Cache Behavior and Headers - Check if repeating crafted requests to the Web (HTTP/HTTPS) service results in differences in the X-Cache header (e.g., HIT vs. MISS), indicating cache behavior
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

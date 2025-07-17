---
testcase: Single-Use Endpoint - Check if multiple parallel requests to Web (HTTP/HTTPS) service endpoints like coupon redemption, gift card use, or one-time promo codes allow re-use or double-execution of the action
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Race conditions
services:
  - WEB
references:
  - https://portswigger.net/web-security/race-conditions
---

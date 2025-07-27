---
testcase: RTSP Describe Request - Validate unauthenticated or authenticated access by sending a properly formatted DESCRIBE request and checking for "200 OK" (unauthenticated) or "401 Unauthorized" (auth required)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IPMI
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/623-udp-ipmi.html
---

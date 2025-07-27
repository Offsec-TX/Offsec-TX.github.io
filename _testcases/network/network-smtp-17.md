---
testcase: SPF Record Validation - Verify SPF policy via DNS (dig txt <domain> | grep spf) and ensure no -all misconfigurations
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SMTP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-smtp/index.html
---

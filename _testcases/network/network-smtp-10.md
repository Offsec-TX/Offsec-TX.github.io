---
testcase: Username Enumeration via RCPT TO - Validate user existence by issuing RCPT TO:<user> and observing 250 vs. 550 responses
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

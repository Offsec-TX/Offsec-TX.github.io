---
testcase: TLS Configuration - Check STARTTLS downgrade resilience by attempting unencrypted EHLO and then issuing STARTTLS, confirming proper upgrade
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

---
testcase: Sniffing Credentials - Check for clear-text credentials on port 25 by capturing SMTP traffic (tcpdump -i eth0 -A 'tcp port 25')
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

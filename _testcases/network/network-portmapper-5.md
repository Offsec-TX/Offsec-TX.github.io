---
testcase: NIS Enumeration - Verify NIS (ypbind) by discovering the NIS domain (using ypwhich -d <domain> <IP>) and enumerate sensitive files with ypcat –d <domain> –h <IP> passwd.byname
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - PORTMAPPER
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-rpcbind.html
---

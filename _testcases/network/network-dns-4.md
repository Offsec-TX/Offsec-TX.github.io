---
testcase: Zone Transfer Attempt - Check if zone transfer (AXFR) is allowed by trying dig axfr @<IP> <domain>
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - DNS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-dns.html
---
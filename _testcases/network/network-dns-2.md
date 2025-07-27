---
testcase: DNS Banner/Version Retrieval - Verify the DNS server version by querying the version.bind TXT record (dig @<IP> version.bind CHAOS TXT)
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

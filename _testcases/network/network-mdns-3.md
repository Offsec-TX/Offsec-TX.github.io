---
testcase: Service Discovery – Check and enumerate available network services using DNS Service Discovery (DNS-SD) by querying PTR records for _services._dns-sd._udp.local, _http._tcp.local, etc., and inspect returned SRV/TXT/A records for each advertised service
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - mDNS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/5353-udp-multicast-dns-mdns.html
---

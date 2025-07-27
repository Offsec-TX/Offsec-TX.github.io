---
testcase: Session Key/Source Address Validation – Check if devices strictly validate mDNS packet source IP addresses to the local subnet, and test for reflection or amplification vulnerabilities
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

---
testcase: DNS Query Testing – Verify if .local domain queries are resolved by sending mDNS queries to 224.0.0.251 (IPv4) or FF02::FB (IPv6), and check if devices respond with local hostnames
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

---
testcase: Authentication & Control – Check if any mDNS or DNS-SD responses include sensitive info (e.g., WiFi PSKs via printer info leaks, Windows authentication details) that can be used in other attacks or lateral movement
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

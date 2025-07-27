---
testcase: Service Enumeration & Banner Grabbing – Check that port 5353/UDP is open using Nmap (nmap -sU -p 5353 <IP>) and verify the service as zeroconf or mDNS
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

---
testcase: Service Enumeration & Banner Grabbing - Check that port 111 (TCP/UDP) is open using Nmap (nmap -sSUC -p111 <IP>)
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

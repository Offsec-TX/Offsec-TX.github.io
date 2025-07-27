---
testcase: Service Enumeration & Banner Grabbing - Check that ports 137 (UDP and TCP), 138 (UDP), and 139 (TCP) are open using Nmap (nmap -p 137,138,139 -sU -sT <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - NETBIOS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/137-138-139-pentesting-netbios.html
---

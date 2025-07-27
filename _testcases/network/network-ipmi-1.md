---
testcase: Service Enumeration & Banner Grabbing - Check that port 554 (and 8554 if applicable) is open using Nmap (nmap -p 554,8554 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IPMI
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/623-udp-ipmi.html
---

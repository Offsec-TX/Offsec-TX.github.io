---
testcase: Service Enumeration & Banner Grabbing - Check that ports 135 and 593 are open using Nmap (nmap -p 135,593 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - MSRPC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/135-pentesting-msrpc.html
---

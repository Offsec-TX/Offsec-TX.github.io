---
testcase: Service Enumeration & Banner Grabbing - Check that ports 2375 (TCP, unsecured Docker API) and 2376 (TCP, TLS-secured Docker API) are open using Nmap (nmap -p 2375,2376 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - DOCKER
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/2375-pentesting-docker.html
---

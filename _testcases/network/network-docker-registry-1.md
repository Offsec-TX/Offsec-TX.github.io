---
testcase: Service Enumeration & Banner Grabbing – Check that port 5000 is open and running a Docker Registry by scanning with Nmap (nmap -p 5000 -sV <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - DOCKER-REGISTRY
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/5000-pentesting-docker-registry.html
---

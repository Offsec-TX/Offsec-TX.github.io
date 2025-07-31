---
testcase: Service Enumeration & Banner Grabbing – Check that port 6379 is open and running Redis using Nmap (nmap -p 6379 -sV <IP>) and banner grabbing (e.g., with Netcat or redis-cli)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - Redis
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/6379-pentesting-redis.html
---

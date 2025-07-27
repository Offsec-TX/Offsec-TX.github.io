---
testcase: DNS Port Scan - Check that DNS ports (53 TCP and UDP) are open using Nmap (nmap -p 53,5353 -sU -sT <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - DNS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-dns.html
---

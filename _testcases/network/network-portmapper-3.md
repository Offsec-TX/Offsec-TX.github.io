---
testcase: Portmapper Service Info - Validate by issuing Nmap’s version scan and script enumeration to list registered RPC services and program numbers on the host (nmap -sSUC -p111 <IP>)
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

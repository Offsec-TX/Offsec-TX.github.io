---
testcase: Service Enumeration - Verify if SNMP over TLS/DTLS is running on ports 10161/10162 UDP by scanning (nmap -sU -p 10161,10162 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SNMP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-snmp/index.html
---

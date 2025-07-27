---
testcase: Service Enumeration - Check that UDP ports 161 (SNMP agent) and 162 (SNMP traps) are open using Nmap (nmap -sU -p 161,162 <IP>)
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

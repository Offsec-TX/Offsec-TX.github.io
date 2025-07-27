---
testcase: NetBIOS Name Service Script Scan - Check NetBIOS information and workgroup details using Nmap (nmap -sU -p137 --script nbstat <IP>) or (nmap -sU -p137 --script nbstat.nse <IP>)
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

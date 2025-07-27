---
testcase: Service Enumeration & Banner Grabbing - Check that ports 139 (TCP) and 445 (TCP) are open using Nmap (nmap -p 139,445 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SMB
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-smb/index.html
---

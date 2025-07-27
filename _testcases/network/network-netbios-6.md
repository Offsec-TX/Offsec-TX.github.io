---
testcase: NetBIOS Session Service Connection - Validate TCP port 139 session service existence and response using nc -vn <IP> 139 and attempt SMB negotiation
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

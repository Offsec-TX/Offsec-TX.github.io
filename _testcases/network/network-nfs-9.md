---
testcase: File Access Privilege Escalation – Check for world-readable or misconfigured permissions on sensitive files accessible via NFS, including /etc/passwd, /etc/shadow, or critical application config files
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - NFS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/nfs-service-pentesting.html
---

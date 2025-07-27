---
testcase: UID/GID Impersonation Testing – Check if you can impersonate other user UIDs (except root by default) by creating local users with matching UID/GID and accessing files in mounted shares
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

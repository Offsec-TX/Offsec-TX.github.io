---
testcase: Squash Settings Validation – Validate if server uses no_root_squash, all_squash, or root_squash options by checking access to root-owned files or elevation of privileges via NFS shares
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

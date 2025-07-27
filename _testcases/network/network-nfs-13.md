---
testcase: Misconfiguration Identification – Check for insecure export options such as rw, no_root_squash, insecure, no_subtree_check, and no_all_squash that can lead to unauthorized write or privilege escalation
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

---
testcase: Subtree Check Misconfiguration – Verify if subtree_check is disabled (default in many Linux servers), enabling potential directory escapes beyond exported directories when multiple exports exist on the same filesystem
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

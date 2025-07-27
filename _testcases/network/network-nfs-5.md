---
testcase: Mounting NFS Shares – Verify ability to mount exposed shares using appropriate NFS client commands, preferably with mount -t nfs -o vers=2 <IP>:<share> <local_mountpoint> to target less-secure NFSv2 shares
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

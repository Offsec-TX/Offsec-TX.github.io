---
testcase: Banner and Info Enumeration – Verify NFS availability and version by scanning with Nmap version detection and RPC scan (nmap -sV -p 2049 --script=rpc-grind,rpcinfo <IP>)
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

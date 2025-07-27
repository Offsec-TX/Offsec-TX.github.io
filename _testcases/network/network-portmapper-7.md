---
testcase: Filtered Portmapper Bypass - Check the ability to access NFS when 111 is filtered by simulating a local portmapper and tunneling to the target, then connecting standard tools through this tunnel
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - PORTMAPPER
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-rpcbind.html
---

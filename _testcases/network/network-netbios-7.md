---
testcase: SMB Share Enumeration (over NetBIOS 139) - Check for available SMB shares and named pipes: use smbclient -L //<IP> and Windows builtin tools (net view \\<IP>)
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

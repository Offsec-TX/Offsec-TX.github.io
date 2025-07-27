---
testcase: Directory Traversal - Validate if directory traversal vectors exist by attempting to read or write files outside allowed directories (e.g., ../../etc/passwd) during file operations
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - TFTP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/69-udp-tftp.html
---

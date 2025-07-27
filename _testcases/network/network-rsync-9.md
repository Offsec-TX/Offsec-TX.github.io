---
testcase: File Upload - Check write access by uploading files to Rsync modules (e.g., upload SSH authorized_keys) using: rsync -av ./local_path/ rsync://username@<IP>/<module> 
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - RSYNC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/873-pentesting-rsync.html
---

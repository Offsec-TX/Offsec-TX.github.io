---
testcase: Unauthenticated Access - Check if any Rsync modules allow anonymous access to list and download files (rsync -av --list-only rsync://<IP>/<module>)
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

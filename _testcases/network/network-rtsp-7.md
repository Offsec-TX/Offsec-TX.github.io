---
testcase: PSK Hash Capture - Check if main/aggressive mode with a valid group name allows you to capture the PSK hash for offline cracking (ike-scan -M -A -n <ID> --pskcrack=hash.txt <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - RTSP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/554-8554-pentesting-rtsp.html
---

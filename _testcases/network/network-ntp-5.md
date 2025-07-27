---
testcase: Modern NTP Daemon Checks (chrony) - Verify remote monitoring access (if cmdallow enabled) via chronyc -a -n tracking -h <IP>, chronyc -a -n sources -v -h <IP>
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - NTP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ntp.html
---

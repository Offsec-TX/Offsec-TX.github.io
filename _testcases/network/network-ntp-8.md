---
testcase: Configuration File Review - Verify security posture by reviewing /etc/ntp.conf, /etc/chrony/chrony.conf, and checking for strict restrict, kod, and disable monitor directives (if internal access is available)
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

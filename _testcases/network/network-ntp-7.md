---
testcase: NTP Amplification DDoS Test - Check if monlist is enabled by running ntpdc -n -c monlist <IP> or nmap -sU -p123 --script ntp-monlist <IP>
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

---
testcase: Enumeration via Nmap Script - Verify TFTP enumeration by running Nmap’s tftp-enum script to brute-force common file and directory names (nmap -n -Pn -sU -p69 --script tftp-enum <IP>)
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

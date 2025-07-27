---
testcase: Vendor Fingerprinting - Verify VPN vendor implementation using ike-scan’s fingerprinting and VID payload analysis (ike-scan -M --showbackoff <IP>), or enumerate vendor with nmap (nmap -sU --script ike-version -p 500 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IKE
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/ipsec-ike-vpn-pentesting.html
---

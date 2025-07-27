---
testcase: Group Name/ID Brute-force - Check for valid group names (IDs) for aggressive mode handshakes using wordlists (ike-scan -M -A -n <groupname> <IP>) and brute-force common IDs until a real handshake (not fake hash) is returned
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

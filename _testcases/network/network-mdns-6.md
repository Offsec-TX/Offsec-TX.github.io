---
testcase: Host Spoofing & MitM Testing – Verify vulnerability to spoofing by responding to mDNS probes with forged claims (using Pholus or custom tools) so new devices cannot register hostnames or services and confirm denial of service or successful MitM setup
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - mDNS
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/5353-udp-multicast-dns-mdns.html
---

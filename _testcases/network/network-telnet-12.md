---
testcase: Denial-of-Service Testing - Check for RFC-compliant overflow by sending a two-byte IAC sequence (0xff 0xf7 0xff 0xf8) and observing for service crash or restart
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - TELNET
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-telnet.html
---

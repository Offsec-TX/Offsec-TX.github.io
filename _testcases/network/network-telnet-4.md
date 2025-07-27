---
testcase: Telnet Option Enumeration - Check raw IAC negotiation by sending printf '\xff\xfd\x01\xff\xfb\x03' | nc <IP> 23 -N and observing WILL/WONT responses for ECHO (1) and SUPPRESS GO AHEAD (3)
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

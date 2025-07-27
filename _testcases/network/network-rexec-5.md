---
testcase: Sniffing Credentials - Check for cleartext credential exposure by capturing and parsing Rexec traffic with tshark or Wireshark (“Decode As… TCP 512 → REXEC”), verifying if usernames/passwords/commands are readable directly from the wire
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - REXEC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/512-pentesting-rexec.html
---

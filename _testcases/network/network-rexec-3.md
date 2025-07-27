---
testcase: Manual Command Execution - Check direct command execution using legacy clients (rexec -l <user> -p <password> <target> 'uname -a') or by crafting the protocol manually (echo -ne '0\0user\0pass\0id\0' | nc <target> 512), and verify output
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

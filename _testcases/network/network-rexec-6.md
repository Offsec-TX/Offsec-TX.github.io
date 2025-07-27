---
testcase: Access & Command Validation - After a successful login, verify command execution privilege by running id, whoami, or file reads. Check if shell-escape or chaining (;, &&) is permitted and if you can obtain reverse shells or escalate privileges
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

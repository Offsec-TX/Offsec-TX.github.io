---
testcase: Password Reuse/Lateral Movement - Check for stored credentials in user home directories (e.g., ~/.netrc), and attempt using discovered passwords to pivot to other systems
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

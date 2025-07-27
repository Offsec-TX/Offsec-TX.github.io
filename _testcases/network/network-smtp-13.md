---
testcase: Authentication Brute-Force - Check common credentials with Hydra (hydra -L users.txt -P passwords.txt smtp://<IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SMTP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-smtp/index.html
---

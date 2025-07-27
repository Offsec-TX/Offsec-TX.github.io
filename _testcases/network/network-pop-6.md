---
testcase: Credential Brute-Force - Check for valid user/password combinations with Hydra (hydra -l <Username> -P <PasswordList> pop3://<IP> -V -f)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - POP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-pop.html
---

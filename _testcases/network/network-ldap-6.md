---
testcase: Authentication Brute Force - Verify valid credentials by attempting simple binds with common/default usernames and passwords using tools like Hydra (hydra -L users.txt -P passwords.txt ldap://<IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - LDAP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ldap.html
---

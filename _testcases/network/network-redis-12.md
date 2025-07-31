---
testcase: RCE SSH Key Injection – Validate if you can write an attacker-controlled SSH public key into /home/redis/.ssh/authorized_keys (or another user’s home) and gain shell access
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - Redis
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/6379-pentesting-redis.html
---

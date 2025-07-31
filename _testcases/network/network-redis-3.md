---
testcase: Manual Service Access – Check for direct access to Redis without authentication using redis-cli -h <IP> or nc <IP> 6379; test with the INFO command
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

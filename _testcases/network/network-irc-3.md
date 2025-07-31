---
testcase: IRC Connection - Check basic IRC connection by sending; USER <random_nick> 0 * :<realname>, NICK <random_nick> and responding with PONG to any server PING messages
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IRC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-irc.html
---

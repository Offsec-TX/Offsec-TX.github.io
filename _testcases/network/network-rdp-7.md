---
testcase: Session Stealing - Check if SYSTEM privileges allow taking over active RDP sessions with; tscon <ID> /dest:<SESSIONNAME> or using Mimikatz (ts::sessions, ts::remote /id:<id>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - RDP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-rdp.html
---

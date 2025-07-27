---
testcase: Service Enumeration & Banner Grabbing - Check that ports 389 (LDAP), 636 (LDAPS), 3268 (Global Catalog), and 3269 (LDAPS Global Catalog) are open using Nmap (nmap -p 389,636,3268,3269 <IP>)
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

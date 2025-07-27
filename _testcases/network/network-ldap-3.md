---
testcase: Anonymous LDAP Bind - Check for anonymous access by issuing a simple anonymous LDAP search (e.g., ldapsearch -x -H ldap://<IP>:389 -b "" -s base)
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

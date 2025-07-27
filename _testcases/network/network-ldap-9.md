---
testcase: LDIF Data Extraction - Check if you can enumerate directory structure and content by exporting with LDIF format (ldapsearch -x -H ldap://<IP>:389 -b "dc=example,dc=com" > dump.ldif)
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

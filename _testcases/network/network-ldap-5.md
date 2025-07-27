---
testcase: LDAP Information Disclosure - Check if you can enumerate directory information (users, groups, OUs) via anonymous bind (ldapsearch -x -LLL -H ldap://<IP>:389 -b "dc=example,dc=com")
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

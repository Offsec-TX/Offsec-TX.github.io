---
testcase: Anonymous LDAPS Bind & SNI Bypass - Verify if anonymous access is possible over SSL and test bypassing Server Name Indication (SNI) by connecting with an arbitrary domain (ldapsearch -H ldaps://company.com:636/ -x -s base -b "" "(objectClass=*)" "*" +)
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

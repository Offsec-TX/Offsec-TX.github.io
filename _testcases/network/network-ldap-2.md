---
testcase: Service Enumeration & Banner Grabbing - Verify LDAP/LDAPS server availability and banner by connecting with Netcat or OpenSSL (nc -vn <IP> 389, openssl s_client -connect <IP>:636 -quiet)
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

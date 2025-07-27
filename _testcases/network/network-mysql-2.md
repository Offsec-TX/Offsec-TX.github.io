---
testcase: Service Enumeration - Verify MySQL information and configuration using Nmap MySQL scripts (nmap --script=mysql-info,mysql-empty-password,mysql-databases,mysql-enum,mysql-hashes,mysql-vuln-cve* -p 3306 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - MYSQL
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-mysql.html
---

---
testcase: Service Enumeration & Banner Grabbing – Check that ports 5432 and 5433 are open and running PostgreSQL using Nmap (nmap -p 5432,5433 -sV <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - PostgreSQL
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-postgresql.html
---

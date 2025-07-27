---
testcase: Service Enumeration & Banner Grabbing – Check that RMI ports (1098, 1099, 1050, and high-numbered dynamic ports) are open using Nmap (nmap -p 1098,1099,1050 <IP>)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - JAVA-RMI
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/1099-pentesting-java-rmi.html
---

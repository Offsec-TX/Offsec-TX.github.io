---
testcase: Service Enumeration & Banner Grabbing - Validate SMTPS support by connecting with openssl s_client -crlf -connect <IP>:465 and STARTTLS support with openssl s_client -starttls smtp -crlf -connect <IP>:587
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SMTP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-smtp/index.html
---

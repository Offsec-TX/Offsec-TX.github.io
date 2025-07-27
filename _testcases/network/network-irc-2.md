---
testcase: Service Enumeration & Banner Grabbing - Verify IRC server version and banner by connecting with Netcat (nc -vn <IP> <PORT>) or OpenSSL for TLS (openssl s_client -connect <IP>:<PORT> -quiet)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IRC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-irc.html
---

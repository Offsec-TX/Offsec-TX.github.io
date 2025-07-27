---
testcase: Service Hardening/Exposure - Check whether Rexec is shielded from external networks, and that related r-services (rsh, rlogin) are disabled if not required, thus ensuring Rexec is not exposed or misconfigured
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - REXEC
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/512-pentesting-rexec.html
---

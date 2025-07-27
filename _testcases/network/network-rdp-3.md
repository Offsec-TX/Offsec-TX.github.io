---
testcase: Brute Force & Password Spraying - Check for weak, default, or reused credentials by brute-forcing with tools such as Hydra or Crowbar, being mindful of account lockout policies (hydra -L users.txt -P passwords.txt <IP> rdp)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - RDP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-rdp.html
---

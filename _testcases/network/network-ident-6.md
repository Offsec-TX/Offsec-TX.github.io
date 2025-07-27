---
testcase: User Mapping for Other Services – Check for users running on multiple services (e.g., Samba on port 445, SSH on port 22) via ident lookups, confirming if the same or different local users own these processes
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IDENT
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/113-pentesting-ident.html
---

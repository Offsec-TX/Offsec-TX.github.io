---
testcase: DKIM Key Retrieval - Check DKIM by querying the selector’s DNS TXT record (e.g., dig <selector>._domainkey.<domain> TXT)
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

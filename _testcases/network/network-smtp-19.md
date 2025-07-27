---
testcase: DMARC Policy Inspection - Verify DMARC policy with dig _dmarc.<domain> TXT and ensure p=reject or quarantine as appropriate
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

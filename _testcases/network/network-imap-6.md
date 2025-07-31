---
testcase: IMAP Command Enumeration - Check IMAP command support and mailbox interaction using commands such as; A1 LOGIN username password, A1 LIST "" * (list mailboxes), A1 SELECT INBOX (select mailbox), A1 FETCH 1:* (FLAGS) (list messages), A1 UID FETCH 1:* (FLAGS) (list by UID)
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - IMAP
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/pentesting-imap.html
---

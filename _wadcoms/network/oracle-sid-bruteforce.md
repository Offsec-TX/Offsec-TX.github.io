---
description: |
  SIDs play a crucial role in Oracle connections by identifying the specific database instance a client wants to access. Using an incorrect SID results in a failed connection. Database administrators utilize SIDs to monitor and manage individual database instances—for example, to start, stop, or restart an instance or adjust its configuration parameters.

  There are several methods to enumerate or guess SIDs. Here, we leverage Nmap's scripting capabilities to attempt SID enumeration.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  nmap -Pn -p 1521 -sV 10.10.10.1 --script oracle-sid-brute

items:
  - No_Creds
services:
  - ORACLE-TNS
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/112/section/2117
---

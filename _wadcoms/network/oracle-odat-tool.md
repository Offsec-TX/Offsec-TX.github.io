---
description: |
  Leverage the Oracle Database Assessment Tool (odat) to perform comprehensive Oracle database enumeration and vulnerability assessment. This tool supports multiple modules—including banner grabbing, SID guessing, and password extraction—to interact with Oracle TNS services running on a target system.

  Command Reference:

      Target IP: 10.129.204.235

command: |
  ./odat.py all -s 10.129.204.235

code: |
  ./odat.py -h
  odat.py [-h] [--version]
               {all,tnscmd,tnspoison,sidguesser,snguesser,passwordguesser,utlhttp,httpuritype,utltcp,ctxsys,externaltable,dbmsxslprocessor,dbmsadvisor,utlfile,dbmsscheduler,java,passwordstealer,oradbg,dbmslob,stealremotepwds,userlikepwd,smb,privesc,cve,search,unwrapper,clean}

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

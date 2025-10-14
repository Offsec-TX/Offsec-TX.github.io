---
testcase: Credential Discovery via Other Files and Artifacts
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  1. Search user folders and network shares for file names/extensions likely to contain secrets (e.g., *.txt, *.config, *.cred, *pass*).
  2. Search file contents for keywords like "password" using findstr (Windows) or select-string (PowerShell).
  3. Locate StickyNotes database files (plum.sqlite*) and analyze contents for secrets using an SQLite browser or PowerShell module (PSSQLite).
  4. Enumerate and examine notable files for credentials: pagefile.sys, *.config, ntuser.dat, etc.
  5. Grep for secrets in database/files with utilities like strings.
  6. Document and test credentials found for possible privilege escalation or lateral movement.
---

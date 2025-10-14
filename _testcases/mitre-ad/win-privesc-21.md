---
testcase: Sticky Notes Database Analysis
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Locate the Sticky Notes database file:
    - Path: `C:\Users\<user>\AppData\Local\Packages\Microsoft.MicrosoftStickyNotes_8wekyb3d8bbwe\LocalState\plum.sqlite`
  - Extract the `plum.sqlite` file for analysis.
  - Analyze the database using one of the following methods:
    - Use DB Browser for SQLite to open and review the contents.
    - Use PowerShell with the PSSQLite module to query the database.
    - Use the `strings` command line tool to search for readable text within the file.
  - Review the extracted data for any sensitive information or credentials.
---

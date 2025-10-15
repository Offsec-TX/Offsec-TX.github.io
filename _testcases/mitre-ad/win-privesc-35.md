---
testcase: Pillaging - Attack Backup Servers and Extract Data
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Enumerate installed backup software (e.g., Restic).
  - Locate repository paths or configuration files that indicate the location of backups.
  - Use backup tools (e.g., restic.exe) to list and restore backups:
    - List backups:
      ```powershell
      restic.exe -r <repository_path> snapshots
      ```
    - Restore a backup:
      ```powershell
      restic.exe -r <repository_path> restore <snapshot_id> --target <restore_path>
      ```
  - Review restored data for sensitive items (e.g., SAM, SYSTEM hives, application configs, SSH keys).
---

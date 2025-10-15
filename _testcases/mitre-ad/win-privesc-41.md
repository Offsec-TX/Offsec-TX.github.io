---
testcase: Miscellaneous Techniques - Mounting and Pillaging VHDX/VMDK Files
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Obtain VHD, VHDX, or VMDK file from the local system or a network share.
  - Mount the disk:
    - On Linux:
      - For VMDK: `guestmount -a <disk.vmdk> -i --ro /mnt/vmdk`
      - For VHDX: `guestmount --add <disk.vhdx> --ro /mnt/vhdx/ -m /dev/sda1`
    - On Windows:
      - Right-click the file and select "Mount" or use Disk Management/Map Virtual Disk.
  - Explore the filesystem:
    - Browse to `C:\Windows\System32\Config` for SAM, SYSTEM, and SECURITY hives.
  - Extract hashes:
    - Use secretsdump: `secretsdump.py -sam SAM -security SECURITY -system SYSTEM LOCAL`
  - Verify if you are able to retrieve hashes.
  - Consider what actions are possible with a successfully extracted local admin hash (e.g., lateral movement techniques).
---

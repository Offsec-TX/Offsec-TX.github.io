---
testcase: Use Bad USB devices such as USB Rubber Ducky or Bash Bunny on systems joined to Onprem AD to exfiltrate data or establish persistence or initial access
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://docs.hak5.org/hak5-usb-rubber-ducky/attack-modes-constants-and-variables/attack-modes/
  - https://www.sciencedirect.com/science/article/pii/S2666281721000986
how-to-test: |
  1. Physical Access:
     - Gain brief physical access to an endpoint joined to the on-prem AD.

  2. Device Plug-in:
     - Insert the USB Rubber Ducky or Bash Bunny. The device should impersonate a keyboard and/or storage device.

  3. Keystroke Injection:
     - Launch a command terminal (e.g., using Win + R to open PowerShell), then download and execute a reverse shell or enable RDP for remote persistence.

  4. Exfiltration:
     - Script the copying of sensitive files (e.g., password databases, credential files) to the device in storage mode—this can occur in seconds.

  5. Persistence/Initial Access:
     - Deploy payloads that add new privileged users, set scheduled tasks, or install backdoors, ensuring future access even after the device is removed.
---
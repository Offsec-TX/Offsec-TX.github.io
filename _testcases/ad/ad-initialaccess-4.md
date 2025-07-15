---
testcase: Assess if NAC enforcement resists MAC spoofing; check if BitLocker is disabled (Off), and attempt to remove NAC client programs in the Onprem AD setup
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://macaddresslookup.io/blogs/how-hackers-use-mac-spoofing-and-how-to-prevent-it
how-to-test: |
  1. Attempt a MAC Spoofing Attack:
     - Change your endpoint’s MAC address to mimic an authorized device using OS tools or third-party utilities.
  
  2. Connect to the Network:
     - Try accessing the network using the spoofed MAC address and observe whether the NAC system grants access or flags the attempt.
  
  3. Monitor NAC System Logs and Alerts:
     - Review NAC or IDS logs for alerts regarding duplicate MAC addresses, port anomalies, or spoofing activity.
  
  4. Test Device Fingerprinting (if supported):
     - Check if NAC solutions use device fingerprinting (e.g., OS checks or behavioral analysis) to block access even when the MAC is spoofed.
  
  5. Verify 802.1X and Multi-Factor Authentication:
     - Confirm if 802.1X or additional authentication is enforced, which can prevent access based solely on MAC address.
  
  6. Check BitLocker Status:
     - On the test endpoint, run “manage-bde -status” or view BitLocker settings to determine if drive encryption is off.
  
  7. Attempt to Remove/Disable the NAC Client Program:
     - Uninstall or terminate the NAC client agent on the endpoint and try to reconnect to the network.
  
  8. Observe Network Behavior Post-Removal:
     - Monitor whether network access is revoked, restricted, or if the system remains connected without NAC enforcement.
  
  9. Review Network Logs and Endpoint Security Alerts:
     - Examine AD server and NAC logs for events indicating NAC client removal or suspicious host behavior.
  
  10. Document Findings:
      - Record if NAC reliably resists MAC spoofing, whether BitLocker is disabled, and what happens following removal of the NAC client—highlighting any gaps or compliance failures observed in the Onprem AD environment.
---
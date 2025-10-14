---
testcase: If NAC is active, attempt a MAC address spoofing attack to bypass access restrictions and gain unauthorized network access
platforms:
  - AD
methodology:
  - BlackBox
  - GreyBox
references:
  - https://www.thehacker.recipes/physical/networking/network-access-control
  - https://www.infosecinstitute.com/resources/penetration-testing/nac-hacking-bypassing-network-access-control/
how-to-test: |
  1. From the client premises, verify that NAC is enforced on all ports.
  2. Confirm that the NAC system registers authorized MAC addresses.

  **Method 1: MAC Address Spoofing Attack**
    a. Identify an authorized MAC address.
    b. Disconnect the legitimate device if necessary.
    c. Change the attacker's MAC address to match the authorized MAC.
    d. Reconnect to the network and observe whether network access is granted.
---
---
testcase: If NAC and MAC spoofing protections are active, test for VLAN hopping vulnerabilities to move laterally across restricted segments in the Onprem AD environment
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://www.techtarget.com/searchsecurity/definition/VLAN-hopping
  - https://www.packetlabs.net/posts/what-is-vlan-hopping/
how-to-test: |
  1. From the client premises, verify that NAC is enforced on all ports.
  2. Confirm that both NAC and MAC spoofing protections are active.

  **Method 1: VLAN Hopping**
    a. Identify potential VLAN misconfigurations.
    b. Attempt to construct packets that traverse from the NAC-enforced segment to a restricted VLAN.
    c. Validate if unauthorized network segments become accessible based on response.
---
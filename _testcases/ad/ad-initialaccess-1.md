---
testcase: Confirm that Network Access Control (NAC) policies are enforced across all endpoints within the Onprem AD-connected environment
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://www.fortinet.com/resources/cyberglossary/what-is-network-access-control
  - https://www.varonis.com/blog/network-access-control-nac
  - https://docs.genians.com/nac/5.0/beta/en/intro.html
  - https://nordlayer.com/blog/6-network-access-control-best-practices/
  - https://www.cloudnuro.ai/blog/top-10-network-access-control-nac-solutions-for-zero-trust-implementation
how-to-test: |
  1. From the client premises, verify that NAC is enforced on all ports.
  2. If any port does not enforce NAC, escalate the issue through the appropriate network gateway for remediation.
---
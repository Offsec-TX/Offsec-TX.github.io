---
testcase: Multi-Step Workflow Integrity - Validate that concurrent requests to different steps of a process (e.g., password reset, payment, email confirmation) in the Web (HTTP/HTTPS) service do not allow skipping, merging, or breaking the workflow logic
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - Race conditions
services:
  - WEB
references:
  - https://portswigger.net/web-security/race-conditions
---

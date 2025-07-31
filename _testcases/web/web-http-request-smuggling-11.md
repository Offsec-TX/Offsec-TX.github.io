---
testcase: Timing and Differential Response - Verify with paired request tests; send an “attack” request expected to desynchronize the channel, immediately followed by a “normal” request; validate that responses for the second request are altered, blocked, or misrouted. Web (HTTP/HTTPS) service
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - HTTP request smuggling
services:
  - WEB
references:
  - https://portswigger.net/web-security/request-smuggling
---

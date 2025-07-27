---
testcase: API Endpoint Checking – Validate that accessing /v2/ returns {} and /v2/_catalog returns either a list of repositories or an authentication error
platforms: 
  - Network
methodology: 
  - BlackBox
  - GreyBox
services:
  - DOCKER-REGISTRY
references:
  - https://book.hacktricks.wiki/en/network-services-pentesting/5000-pentesting-docker-registry.html
---

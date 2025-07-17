---
testcase: URL, Method, and Path Variance - Validate that alternate URL formats (e.g., /Admin/DeleteUser, /admin/deleteUser/, /admin/deleteUser.json) in the Web (HTTP/HTTPS) service are uniformly protected
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Access control
services:
  - WEB
references:
  - https://portswigger.net/web-security/access-control
---
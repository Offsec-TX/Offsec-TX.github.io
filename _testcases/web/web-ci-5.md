---
testcase: Confirm if supplying output redirection commands (e.g., & whoami > /var/www/static/whoami.txt &) to a Web (HTTP/HTTPS) service leads to file creation on the server containing command output
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox

vulnerabilities:
  - Command injection
services:
  - WEB
references:
  - https://portswigger.net/web-security/os-command-injection
---
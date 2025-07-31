---
testcase: File Upload Vector - Check whether uploading XML-based files (e.g., SVG, DOCX, PDF, RSS feeds), or XML compressed in archive formats, leads to XXE exploitation when the Web (HTTP/HTTPS) service processes the uploaded content
platforms: 
  - Web
  - Network
methodology: 
  - BlackBox
  - GreyBox
vulnerabilities:
  - XXE
services:
  - WEB
references:
  - https://portswigger.net/web-security/xxe
---

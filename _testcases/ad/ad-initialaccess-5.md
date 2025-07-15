---
testcase: Attempt to gain unauthorized access to the internal network via wireless infrastructure and identify weak configurations or mismanaged access points
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://www.threatintelligence.com/blog/wireless-penetration-testing
  - https://purplesec.us/learn/perform-wireless-penetration-test/
  - https://github.com/ricardojoserf/wifi-pentesting-guide
how-to-test: |
  1. Reconnaissance:
     - Use tools (e.g., NetStumbler, Kismet, airmon-ng) to scan the vicinity for all wireless networks, including hidden SSIDs and rogue access points.
     - Physically map access point locations (via wardriving or site surveys) to detect unauthorized or poorly placed devices.

  2. Identify Wireless Networks:
     - Place your wireless adapter in monitor mode to detect broadcast SSIDs, BSSIDs (MAC addresses), access point vendors, and signal strengths.
     - Use packet capture tools (e.g., airodump-ng) to observe wireless traffic and distinguish between guest and corporate WLANs, as well as neighboring networks.

  3. Analyze Configurations and Vulnerabilities:
     - Document the encryption and authentication methods for each access point (e.g., Open, WEP, WPA2-Personal, WPA2-Enterprise, WPA3).
     - Identify weak protocols (such as WEP), default configurations, weak passwords, or misconfigured WPA-Enterprise settings (e.g., lack of certificate validation).
     - Check access points for default or outdated firmware, weak management interfaces, and unnecessary open ports.

  4. Exploit Weaknesses:
     - For open or WEP-protected networks: Attempt direct association and access; use tools for WEP cracking if applicable.
     - For WPA/WPA2/WPA3-PSK: Capture handshake traffic (using deauthentication/reassociation attacks) and attempt dictionary or brute-force attacks to recover weak passphrases.
     - For WPA/WPA2-Enterprise: Perform evil twin or rogue AP attacks to intercept authentication attempts and collect credentials. Test if devices connect to unauthorized APs.
     - Attempt to access the access point’s admin interface, checking for default or weak credentials and outdated firmware.
     - Evaluate for segmentation weaknesses or misconfigured VLANs that could allow lateral movement after initial access.

  5. Internal Network Enumeration (Post-Exploitation):
     - If unauthorized access is gained, enumerate internal networks using scanning tools (e.g., Nmap, Masscan) to identify hosts, open ports, and sensitive assets.
     - Test for Man-in-the-Middle attacks (e.g., using Ettercap) to intercept or manipulate internal traffic.

  6. Reporting:
     - Document identified vulnerabilities (e.g., weak encryption, default passwords, rogue APs, misconfigurations).
     - Provide recommendations for remediation, such as enforcing strong passphrases, proper AP management, firmware updates, disabling WPS, implementing network segmentation, and performing regular security reviews.
---
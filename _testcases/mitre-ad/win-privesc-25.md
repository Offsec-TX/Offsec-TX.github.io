---
testcase: Interacting with Users - Traffic Capture
platforms:
  - AD
  - Windows
methodology:
  - BlackBox
  - GreyBox
references:
  - https://attack.mitre.org/techniques/T1552/
how-to-test: |
  - Check if packet capture tools (e.g., Wireshark, tcpdump) are installed and if necessary drivers (e.g., Npcap) allow capturing traffic.
  - Use Wireshark or tcpdump to capture network traffic while users interact with services using insecure protocols (e.g., FTP, SMB).
  - Analyze captured traffic for credentials using tools like net-creds or by manually inspecting PCAP files.
  - Document any discovered credentials and assess their potential for privilege escalation.
---

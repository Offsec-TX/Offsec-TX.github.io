#!/bin/bash

# Use a plain text list: category,count
cat_list='
OS & Kernel,4
User Management,4
Authentication,3
Filesystem & Permissions,6
Network & Firewall,4
SSH Hardening,3
Services & Daemons,2
Boot Security,2
Kernel Hardening,4
Process Hardening,3
Services & Applications,2
Scheduled Tasks,2
Account Controls,2
Networking,5
DNS,2
Logging & Auditing,6
Package & Integrity,4
Virtualization/Containers,3
Security Tools,2
Backup & Recovery,3
'

while IFS=, read -r category count; do
  # Skip empty lines
  [ -z "$category" ] && continue

  # Proper cleanup: lowercase and hyphenated
  clean_name=$(echo "$category" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed 's/^-//;s/-$//')

  for i in $(seq 1 "$count"); do
    filename="linux-${clean_name}-${i}.md"
    cat <<EOF > "$filename"
---
description: |
  Perform directory fuzzing to identify hidden paths and directories on a target web server. 
  The provided commands use tools like ffuf, gobuster, and feroxbuster to enumerate directories and discover potential misconfigurations and vulnerabilities.

  Command Reference:

      Target IP: 10.10.10.1

command: |
  ffuf -u http://83.136.253.201:52487/FUZZ -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ

code: |
  gobuster dir -u http://83.136.253.201:52487 -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt
  feroxbuster -u http://83.136.253.201:52487 -w ~/Documents/tools/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt

OS:
  - Linux
attack_types:
  - Configuration_Review
references:
  - https://www.cisecurity.org/benchmark/red_hat_linux
---
EOF
  done
done <<< "$cat_list"
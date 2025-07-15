---
testcase: Execute phishing campaigns targeting users of the Onprem AD domain using malicious attachments, links, fake services, or voice-based social engineering to capture credentials or implant payloads
platforms: 
  - AD
methodology: 
  - BlackBox
  - GreyBox
references:
  - https://support.yubico.com/hc/en-us/articles/7464901246236-Phishing-resistant-authentication-for-on-premises-with-Active-Directory-and-Active-Directory-Federated-Services-using-smart-cards
how-to-test: |
  1. Delivery Methods and Techniques:
     a. Malicious Attachments:
        - Send emails containing documents (e.g., Office files with macros or PDF exploits) that, when opened, execute malicious code to plant payloads or steal credentials.
     b. Malicious Links:
        - Include links to phishing websites that mimic legitimate portals (such as company login screens or access pages), prompting victims to enter their AD credentials.
     c. Fake Service Portals:
        - Set up lookalike portals for IT support, password reset, or HR services to lure users into submitting their credentials under false pretenses.
     d. Vishing (Voice Phishing):
        - Conduct phone-based social engineering by posing as IT staff or vendors to request login details, MFA codes, or to trick users into executing actions that enable remote access.

  2. Payloads and Objectives:
     a. Credential Harvesting:
        - Collect valid AD usernames and passwords for use in further internal attacks, privilege escalation, or lateral movement.
     b. Malware Deployment:
        - Deliver malicious payloads via attachments or links to install keyloggers, remote access trojans (RATs), or ransomware on victim machines.
     c. Establishing Foothold:
        - Achieve persistent access by compromising privileged users or creating backdoors that maintain access even after the initial campaign.

  3. Active Directory-Specific Risks:
     a. Weak or Reused Credentials:
        - Phished credentials may be reused across services, increasing the effectiveness of password spraying and related attacks.
     b. Escalation Paths:
        - Even a low-privilege AD account can be leveraged to perform internal reconnaissance, escalate privileges, and eventually compromise domain admin accounts.
     c. Internal Recon and Lateral Movement:
        - Use stolen credentials to gain internal network access, potentially uncovering further AD weaknesses (e.g., Pass-the-Hash, Kerberoasting, or Golden Ticket attacks).
---
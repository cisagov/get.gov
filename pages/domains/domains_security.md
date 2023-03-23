---
title: Domain security best practices
permalink: /get-gov/security/
layout: layouts/info-page
sidenav: true
excerpt: Domain security best practices for .gov domain managers
tags: domains
eleventyNavigation:
  key: domains
  order: 8
  title: Domain security best practices
---

Domain management can ensure a safe experience for your users and your organization. Take the following steps to manage your .gov domain securely.

## Add a security email for public use

A security email allows the public to report observed or suspected security issues on your domain. Security issues could include notifications about compromised accounts, unsolicited email, routing problems, or potential vulnerabilities. 

Security emails are made public in the [.gov WHOIS](#) (including port 43) and in [our published data](#). A security contact should be capable of evaluating or triaging security reports for your entire domain. Use a team email address, not an individual’s email. We recommend using an alias, like security@<domain.gov>. 

Add your security contact to your website and in organizational communications so it’s easy for the public to know where to report issues.

[Add or update the security email for your .gov domain](#).

## Develop a vulnerability disclosure policy

Consider having a vulnerability disclosure policy (VDP). A VDP outlines how your organization prefers to receive vulnerability reports, what you’ll do with them, the scope of systems covered by the policy, and legal authorization for those who follow the policy and report in good faith.

- The [Department of Justice framework for a vulnerability disclosure program for online systems](https://www.justice.gov/criminal-ccips/page/file/983996/download) (PDF) provides guidance for developing, instituting, and administering a policy.
- The [National Telecommunications and Information Administration’s VDP template](https://www.ntia.doc.gov/files/ntia/publications/ntia_vuln_disclosure_early_stage_template.pdf) (PDF) lists key elements for a vulnerability disclosure program.
- Government VDP examples include:
    -   [Department of Defense VDPs](https://hackerone.com/deptofdefense)
    -   [General Services Administration: Technology Transformation Services VDP](https://18f.gsa.gov/vulnerability-disclosure-policy/)
    -   [CISA’s VDP for .gov](#)

Once complete, put your vulnerability disclosure policy online.

## Use DMARC email authentication method

It shouldn’t be easy to impersonate the government. Spammers can spoof your domain to send fake messages that appear to come from your organization. DMARC can help prevent spoofing and phishing. DMARC stands for “Domain-based Message Authentication, Reporting and Conformance.” DMARC is an email authentication method that protects your organization by making it difficult for malicious actors to spoof your domain in email.

DMARC tells mail servers what to do when they get a message that appears to be from your organization, but doesn't pass authentication checks documented in your DMARC policy. 

For domains that don’t send email, establishing a strong DMARC policy ensures that no one receives email that appears to come from your domain.

See [CISA's guide to DMARC and email authentication](https://cyber.dhs.gov/bod/18-01/#introduction-to-email-authentication).

## Sign up for CISA’s Cyber Hygiene service

[Cyber Hygiene](https://www.cisa.gov/cyber-hygiene-services) is a free vulnerability scanning service offered by CISA. Cyber Hygiene helps you secure your internet-facing systems and adopt modern security best practices. 

Visit [CISA’s Cyber Hygiene page](https://www.cisa.gov/cyber-hygiene-services) for more information. 

## Join free cybersecurity group

Connect with other state, local, tribal, and territorial governments by joining the free [Multi-State Information Sharing and Analysis Center](https://learn.cisecurity.org/ms-isac-registration) (MS-ISAC). CISA designated MS-ISAC as the [key resource for cyber threat prevention, protection, response, and recovery](https://www.cisa.gov/information-sharing-and-awareness) for all U.S. state, local, tribal, and territorial governments. MS-ISAC helps ensure the resiliency of government systems through coordination, cooperation, and communication.
 


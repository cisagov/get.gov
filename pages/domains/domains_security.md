---
title: Domain security best practices
permalink: /domains/security/
layout: layouts/info-page
sidenav: true
excerpt: Domain security best practices for .gov domain managers
tags: domains
eleventyNavigation:
  key: domains
  order: 9
  title: Domain security best practices
---

Domain management can ensure a safe experience for your users and your organization. Take the following steps to manage your .gov domain securely.

## Add a security email for public use

A security email allows the public to report observed or suspected security issues on your domain. Security issues could include notifications about compromised accounts, unsolicited email, routing problems, or potential vulnerabilities.

Sign in to the [.gov registrar](https://manage.get.gov/){target="_blank"}  to add or update the security email for your .gov domain. 

### Security emails are made public
Security emails are made public in [our published data](../about/data/)
and in the .gov WHOIS. WHOIS (pronounced “who is”) is a standard used by registrars to publish the contact and name server information for registered domains.  

### Managing a security email in your organization
The people behind a security email should be capable of evaluating or triaging security reports for your entire domain. We recommend: 

- Using a team email address, not an individual’s email
- Using a common, even guessable name, like security@<domain.gov> to make it easier to report
- Adding the security email to your website and in other organizational communications so it’s easy for the public to know where to report issues


## Develop a vulnerability disclosure policy

Consider having a vulnerability disclosure policy (VDP). A VDP outlines how your organization prefers to receive vulnerability reports, what you’ll do with them, the scope of systems covered by the policy, and legal authorization for those who follow the policy and report in good faith. Once complete, put your vulnerability disclosure policy online.

CISA released a [directive to federal agencies](https://www.cisa.gov/news-events/directives/bod-20-01-develop-and-publish-vulnerability-disclosure-policy) that requires VDPs. The directive offers a comprehensive framework for how your organization could support a VDP.

[View our vulnerability disclosure policy](../vulnerability-disclosure-policy/).

## Use DMARC to prevent email impersonation

It shouldn’t be easy to impersonate the government, but scammers can spoof your domain to send fake messages that appear to come from your organization. DMARC (Domain-based Message Authentication, Reporting and Conformance) makes it difficult for malicious actors to spoof your domain in email. 

DMARC lets you tell mail servers what to do when they get a message from your domain, giving you tight control. Even for domains that don’t send email, establishing a strong DMARC policy protects your organization’s reputation and the public from falling for deceptive tactics.

[View CISA's guide to DMARC and email authentication](https://www.cisa.gov/news-events/directives/bod-18-01-enhance-email-and-web-security#what-is-email-authentication).

## Sign up for CISA’s Cyber Hygiene service

[Cyber Hygiene](https://www.cisa.gov/cyber-hygiene-services) is a free vulnerability scanning service offered by CISA. Cyber Hygiene helps you secure your internet-facing systems and adopt modern security best practices. 

[Visit CISA’s Cyber Hygiene page](https://www.cisa.gov/cyber-hygiene-services) for more information. 

## Join free cybersecurity group

Join the free [Multi-State Information Sharing and Analysis Center](https://learn.cisecurity.org/ms-isac-registration){.usa-link--external} (MS-ISAC). CISA designated MS-ISAC as the [key resource for cyber threat prevention, protection, response, and recovery](https://www.cisa.gov/information-sharing-and-awareness) for all U.S. state, local, tribal, and territorial governments. MS-ISAC helps ensure the resiliency of government systems through coordination, cooperation, and communication.
 


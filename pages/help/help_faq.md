---
title: FAQs about .gov domains
permalink: /help/faq/
layout: layouts/info-page
excerpt: Frequently asked questions about .gov domains 
tags: help
eleventyNavigation:
  key: help
  order: 4 
---

**Domain requests**
- [How much does a .gov domain cost](#gov-domains-are-free)?
- [I'm working with a government organization. Why do I have to provide personal information to request a domain for them](#working-with-a-gov-org)?
- [Can I request a name like cityname.state.gov (e.g., detroit.mi.gov)](#subdomain)?
- [How much longer until I hear back about my domain request](#domain-request-status)?

Get more [help with domain requests](../domain-requests).

<p class="border-bottom": 1px solid> </p>

**Domain management**
- [How do I add or remove someone from my domain](#add-or-remove-from-domain)?
- [Why don't I see my domain when I sign in to the registrar](#do-not-see-my-domain)?
- [My domain is about to expire. How can I renew my domain](#renew-domain)?
- [Where can I add DNS records](#dns-records)?
- [My DNS hosting provider wants me to transfer my .gov domain to their registrar. What should I do](#transfer-domain)?

Get more [help with domain management](../domain-management).

<p class="border-bottom": 1px solid> </p>

<span id="gov-domains-are-free"></span>
## How much does a .gov domain cost? 
For eligible government organizations, .gov domains are **FREE**! Learn how to get a [free .gov domain](https://get.gov/domains/before/).

<span id="working-with-a-gov-org"></span>
## I'm working with a government organization. Why do I have to provide personal information to request a domain for them?
To ensure that only U.S.-based governments get .gov domains, we verify the identity of every new domain requestor. We do this to:
- Discourage ineligible organizations from requesting a domain.
- Gain assurance that a person who claims to represent a government is who they say they are.

The state of the art in identity verification is to use attested information (like a license or a SSN). This is why we use Login.gov. However, there is no technology to confirm that a person actually represents a government organization. We manually verify that claim as part of our investigation.

<span id="subdomain"></span>
## Can I request a name like cityname.state.gov (e.g., detroit.mi.gov)?
The “cityname” and “detroit” part of the examples above are subdomains. **We do not register subdomains for .gov**. 

To use a subdomain for a particular .gov domain, like mi.gov, you need to coordinate with the registrant for that .gov domain. View [data for all .gov domains](https://get.gov/about/data/), including points of contact for domains.

<span id="domain-request-status"></span>
## How much longer until I hear back about my domain request?
Our review process usually takes 20 business days, but it can take longer depending on the details of your request or on our request volume. You can [check the status of your domain request at any time](https://get.gov/help/domain-requests/#check-the-status-of-your-domain-request). If you have a question, [contact us](https://get.gov/contact/). 

Learn more about [what happens after you request a .gov domain](https://get.gov/domains/before/#what-happens-after-you-request-your-%2Egov-domain).

<span id="add-or-remove-from-domain"></span>
## How do I add or remove someone from my domain?
You can add or remove domain managers without contacting us. 

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “Domain managers” on the left-side navigation.
4. Add or remove domain managers as needed. 

Get more help [adding or removing domain managers](https://get.gov/help/domain-management/#add-a-domain-manager-to-your-.gov-domain).

<span id="do-not-see-my-domain"></span>
## Why don't I see my domain when I sign in to the registrar?
If you had a .gov account prior to November 2023, **you can’t use your old credentials to access the new registrar**. You’ll need to [create a Login.gov account](https://login.gov/help/get-started/create-your-account/){.usa-link--external} with the same email address you used to sign in to the old registrar. That will ensure that you have access to your domains.

If you need help finding the email address you used in the past, email us at help@get.gov.

<span id="renew-domain"></span>
## My domain is about to expire. How can I renew my domain?
As part of launching our new registrar, we extended expiration dates for .gov domains in good standing for one year. **Domains in good standing will not expire before November 1, 2024**. 

If you received an email that your domain is about to expire, that notification is outdated. We are rebuilding our renewal/expiration process. We’ll keep domain managers updated on our progress. 

<span id="dns-records"></span>
## Where can I add DNS records?
To add or update DNS records like A, MX, CNAME, or TXT, you need to make changes at your DNS hosting provider. We don’t offer [DNS hosting services](https://get.gov/domains/moving/#find-dns-hosting-services) at this time. Your provider operates your domain’s name servers, which appear as NS records in the .gov registar.

If you’re unsure who your DNS hosting provider is, sign in to the .gov registrar and review your domain’s NS records. These are your name servers, which are managed by your hosting provider. The domain in the NS record is often the name of the website where you can update your DNS records.

<span id="transfer-domain"></span>
## My DNS hosting provider wants me to transfer my .gov domain to their registrar. What should I do?
**A .gov domain cannot be transferred to any other registrar**. However, DNS for the domain can be managed by a third party, and as some DNS hosting providers operate registrars, their help desk or documentation may not clearly reflect the unique case of .gov domains.

If you are asked for an AUTH code by your DNS hosting provider, let them know that you’re trying to set up DNS hosting and that you cannot transfer a .gov domain to them.

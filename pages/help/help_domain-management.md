---
title: Domain management
permalink: /help/domain-management/
layout: layouts/info-page
excerpt: Help with managing DNS information, domain contacts, and more
tags: help
eleventyNavigation:
  key: help
  order: 3
  title: Domain management
---

It's important to keep information about your .gov domain, your organization, and your contacts updated. 

If you don’t already have a Login.gov account, you’ll need to create one to change any information about your .gov domain. [Create a Login.gov account](https://login.gov/help/get-started/create-your-account/){.usa-link--external}.

 
- [Manage DNS name servers](#manage-dns-name-servers)
- [Enable DNSSEC on your domain](#enable-dnssec-on-your-domain)
- [Disable DNSSEC on your domain](#disable-dnssec-on-your-domain)
- [Update your organization name or mailing address](#update-your-organization-name-or-mailing-address)
- [Update information about your authorizing official](#update-information-about-your-authorizing-official)
- [Update your contact information (email, phone)](#update-your-contact-information-(email%2C-phone))
- [Add or update the security email for your .gov domain](#add-or-update-the-security-email-for-your-.gov-domain)
- [Add a domain manager to your .gov domain](#add-a-domain-manager-to-your-.gov-domain)


## Manage DNS name servers

The Domain Name System (DNS) is the internet service that translates your domain name into an IP address. This makes it possible for people to access your online service by using a name instead of a numbered address.

Before your approved .gov domain can be used, [you’ll first need to connect it to a DNS hosting service](https://beta.get.gov/domains/moving/#find-dns-hosting-services). After you’ve set up hosting, you’ll need to enter your name server information on the .gov registrar. Name server records indicate which DNS server is authoritative for your domain. You must add at least two name servers (13 max).

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “Name servers” (under “DNS”) on the left-side navigation.
4. Enter your name servers in the required format using only supported characters (letters [A-Z], numbers [0-9], the minus sign [-], and the period [.]).
5. Click “Save.”

If you self-host your DNS or use custom addresses for your name server, you will need to add IP addresses for each name server in either the IPv4 or IPv6 format (multiple IP addresses must be separated with commas).

## Enable DNSSEC on your domain

DNSSEC, or DNS Security Extensions, is an additional security layer to protect your website. Enabling DNSSEC ensures that when someone visits your domain, they can be certain that it’s connecting to the correct server, preventing potential hijacking or tampering with your domain's records. 

<strong>Note: It is strongly recommended that you only enable DNSSEC if you know how to set it up properly at your hosting service. If you make a mistake, it could cause your domain name to stop working.</strong>

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “DNSSEC” (under “DNS”) on the left-side navigation.
4. Click “Enable DNSSEC.”
5. Enter the values given by your DNS provider for DS data.
6. If you need to add more than one DS record, click “Add new record,” which appears below the form fields.
7. Click “Save.”

## Disable DNSSEC on your domain

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “DNSSEC” (under “DNS”) on the left-side navigation.
4. Click “Disable DNSSEC.”
5. Click “Confirm.”
6. Wait until the Time to Live (TTL) expires on your DNSSEC records managed by your DNS hosting provider. This is often less than 24 hours, but confirm with your provider.
7. After the TTL expiration, disable DNSSEC at your DNS hosting provider.

<strong>Warning: if you disable DNSSEC at your DNS hosting provider before TTL expiration, this may cause your domain to appear offline.</strong> 

## Update your organization name or mailing address

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “Organization name and mailing address” on the left-side navigation.
4. Update as needed.
5. Click “Save.”

## Update information about your authorizing official

Your authorizing official is the person within your organization who can authorize domain requests. This person must be in a role of significant, executive responsibility within the organization. The person in this role for your organization might change over time due to events like elections, promotions, or turnover.

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.
2. Click the “Manage” link for your .gov domain.
3. Click “Authorizing official” on the left-side navigation.
4. Update as needed.
5. Click “Save.”

## Update your contact information (email, phone)

Updating your contact information for one domain will update the contact information for all domains in your account. However, it won’t affect your Login.gov account information. 

The contact information you provide won’t be made public and will only be used for the .gov program.

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account.  
2. Click the “Manage” link for your .gov domain.
3. Click “Your contact information” on the left-side navigation.
4. Update your contact information.
5. Click “Save.”

## Add or update the security email for your .gov domain

Adding a security email is a security best practice. This email will allow the public to report observed or suspected security issues on your domain. Security emails are made public and included in the .gov domain data we provide.

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account. 
2. Click the “Manage” link for your .gov domain.
3. Click “Security email” on the left-side navigation.
4. If you're adding an email for the first time, add the email and click “Add security email.” If you're updating the email, make your changes.
5. Click "Save."

Learn about [other best practices to manage your domain securely](https://beta.get.gov/domains/security/).

## Add a domain manager to your .gov domain

Domain managers can update all information related to a domain within the .gov registrar, including contact details, authorizing official, security email, and DNS name servers. There is no limit to the number of domain managers you can add.

1. Sign in to the [.gov registrar](https://manage.get.gov){target="_blank"} using your Login.gov account. 
2. Click the “Manage” link for your .gov domain.
3. Click “Domain managers” on the left-side navigation.
4. Click “Add another user” in the Active users section.
5. Enter the email address for the person you want to add as a domain manager. 
6. Click “Add user.”
7. An email invitation will be sent to that person with instructions on how to set up an account.

To remove a domain manager, [contact us](../contact/) for assistance.

All domain managers must  keep their contact information updated and be responsive if contacted by the .gov team.




---
title: Product updates
permalink: /about/product/
layout: layouts/info-page
sidenav: true
excerpt: See what's new in the .gov registrar
tags: about
eleventyNavigation:
  key: about
  order: 6
  title: Product updates
---  

We occasionally share brief notes about new features in the .gov registrar. We also maintain a [roadmap](https://github.com/orgs/cisagov/projects/100/views/1){.usa-link--external} (GitHub).

## November 18, 2025

### Delete a domain {.h4}

You can now request to delete a domain you manage in the .gov registrar. We'll retire it with a salute and a song.

## September 10, 2025

### Administer a portfolio of domains {.h4}

"[Enterprise mode](../../posts/2025-09-10-announcing-enterprise-mode)" is a new suite of features to help governments manage their entire domain portfolio. It introduces an organizational boundary around domains and offers new roles and permissions to give officials a complete view of their .gov footprint.

Enterprise mode is currently in private preview to targeted organizations, primarily in the federal government. We intend to widen availability to state, territorial, and tribal governments next. Eventually, we expect enterprise mode to be the default experience for everyone.

Check out our [blog post](../../posts/2025-09-10-announcing-enterprise-mode) to learn more.

## June 25, 2025

### Domain renewal reminders {.h4}

We’ve begun sending email reminders for domains that are expiring soon. Notifications are sent to domain managers 30 days, 7 days, and 1 day before the expiration date. 

In [February](#february-7-2025), we enabled users to renew a .gov domain in the registrar, and these reminders ensure domain managers know what they need to do and when.


## April 25, 2025

### Simplifying the name servers page {.h4}

The vast majority of domains use a different domain name to host their DNS. They usually do this because their service provider has assigned them a specific set of name server addresses that use the provider’s domains. However, to support those who self-host, we include a field for an IP address for each name server entry.

We previously showed the IP address field regardless of whether an IP address was required. In response to user confusion, we'll now only show you the IP address field if your entry actually requires an IP address.

<img src="https://github.com/user-attachments/assets/f7fa84ca-4f38-4a88-861e-30a4caab9379" alt="A screenshot of the registrar showing a nameserver field where an IP address is required because the nameserver is a hostname on the domain being edited" title="A screenshot of the registrar showing the default fields for nameservers" style="border: 1px solid; margin: auto;"/> 
<p style="font-style: italic;">A screenshot of the registrar showing the default fields for nameservers</p>


<img src="https://github.com/user-attachments/assets/4fcde952-5310-4de1-8192-6ede9e86bbaa" alt="A screenshot of the registrar showing a nameserver field where an IP address is required because the nameserver is a hostname on the domain being edited" title="A screenshot of the registrar showing a nameserver field where an IP address is required because the nameserver is a hostname on the domain being edited" style="border: 1px solid; margin: 5px;"/>
<p style="font-style: italic;">A screenshot of the registrar showing a nameserver field where an IP address is required because the nameserver is a hostname on the domain being edited</p>


## February 7, 2025

### You can now renew a .gov domain online {.h4}

You can now renew a domain in the .gov registrar starting **60 days before expiration**. All domain managers can renew a domain. We’ll add emailed notifications about expiring domains later this spring.

Learn more about [renewing domains](../../help/domain-management/#renew-an-expiring-or-expired-gov-domain).

<figure style="padding: 5px;">
<img width="1092" legth src="https://github.com/user-attachments/assets/75f4b795-2620-45d3-ab13-20c25495cb38" alt="image" title="A screenshot of the registrar showing a notification to the user of multiple expiring domains" style="border: 1px solid;"/> 
<figcaption style="font-style: italic;">A screenshot of the registrar showing a notification to the user of multiple expiring domains</figcaption>
</figure>

## July 24, 2024

### Your contact info, now in one place {.h4}

Each domain registrant is [required](../../domains/requirements/#what-gov-domain-registrants-must-do) to maintain accurate contact information with us, but we previously kept this info on a per-domain level. That made it hard to know how to update these details, especially for those that manage multiple domains.

We’ve centralized your contact information in a single place so you can easily let us know when something has changed. Check it out in “[Your profile](https://manage.get.gov/user-profile)”. 

<figure style="padding: 5px;">
<img width="1092" legth src="https://github.com/user-attachments/assets/6673fb17-b036-4efb-b80d-70b3eab1f457" alt="image" title="A screenshot of the new profile feature" style="border: 1px solid;"/> 
<figcaption style="font-style: italic;">A screenshot of the new profile feature</figcaption>
</figure>

## January 31, 2024

Today we launched a new way to get a .gov domain. You’re reading this on our new [get.gov](https://get.gov) site. The purpose of this site is to help eligible government organizations get and manage .gov domains.

### We made it easier to request a .gov domain {.h4}

Our old domain request process required a signature, typically from the senior elected or highest-ranking official in a government organization. This led to unnecessary delays for many organizations. **The new request process is fully digital**, doesn’t require a physical signature, and can usually be approved by someone with significant, executive responsibility in your organization, like a senior technology officer or chief administrative official.

### We’re using Login.gov for authentication and identity verification {.h4}

Login.gov provides a simple and secure process for signing in to many government services with one account. We require you to verify your identity with Login.gov **before you can request your first .gov domain**. [Create your Login.gov account](https://login.gov/help/get-started/create-your-account/){.usa-link--external}. Read more about [verifying your identity with Login.gov](https://login.gov/help/verify-your-identity/how-to-verify-your-identity/){.usa-link--external}. 

### We improved this site to help you request and manage your .gov domain {.h4}

Check out the site and [let us know what you think](https://forms.office.com/g/Uq30UkMYRu). Here are a few places to start.

- [Why you should use .gov](../../domains/benefits/)
- [How to move to .gov from another domain](../../domains/moving/)
- [Steps to take before you request a .gov domain](../../domains/before/)

### Domain management updates {.h4}

- Domain expiration date: As we reported in November, we extended expiration dates for .gov domains in good standing for one year. Domain managers can now see the expiration dates for their domains.
- Organization address: Your organization's mailing address information is now in the new registrar.
- Domain managers: You can add other users as domain managers, but you can’t remove another user’s access without contacting us. Hold tight, this feature is coming soon!

## November 17, 2023

Our new domain management system—the .gov registrar—is now available. We’ve transferred organization, contacts, and domain name system (DNS) information for all .gov domains to the new registrar.

[Let us know](../../contact/) if you have questions or concerns about the information you see for your domain.

### Changes from the previous registrar {.h4}

- We no longer have the admin, technical, and billing roles. In the new registrar, these roles are all considered "domain managers." You can add an unlimited number of domain managers. 
- We’re now using [Login.gov](https://login.gov/){.usa-link--external} to manage access to the registrar. Login.gov is a simple and secure process for signing in to many government services with one account.

### Some domain information won’t immediately be available in the registrar {#some-domain-information-will-not-immediately-be-available-in-the-registrar .h4}

- Domain expiration date: Good news! We have extended expiration dates for .gov domains in good standing for one year.
- Organization address: We have not yet transferred your organization's mailing address to the new registrar. There is a place to save that information in the new registrar, but it is empty for now.

### Domain management features that aren’t enabled yet {.h4}

- Email notifications aren’t sent for domain information changes (like a change to your contact information).
- A change history for domain information isn’t available.
- Domain managers can’t remove another user’s access without contacting us.

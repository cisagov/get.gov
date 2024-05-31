---
title: Infrastructure as a (public) service
layout: layouts/post
date: 2023-09-06
author: Cameron Dixon
excerpt: Coming soon – a better way to get and manage a .gov
tags:
  - posts
  - Program updates
---

It should be easy for governments to get a .gov domain – and hard to manage one insecurely. So, over the next few months, CISA will initiate major changes to the .gov top-level domain’s tech infrastructure, laying a foundation for the services we will offer in the coming years. We have great plans for making .gov the place governments want to be online. 

We [announced](../2022-09-14-making-infrastructure-less-invisible/) much of this work a year ago; here’s an update on our progress. 

## Three changes coming to .gov this fall 

1. **Moving the .gov registry and DNS**: The most critical element of our work, the *global publication of the .gov DNS zone and related registry software*, will transition to a new service provider. This shift will be carefully coordinated to ensure no impact to U.S.-based government organizations or the public, who depend on .gov websites and email addresses. (To be clear, we don’t run those websites or mail servers, but .gov is the supporting technology layer that makes them navigable online.) 

2. **A new online home for .gov domains**: We’re launching a new *registrar*, the online home for governments to request and manage a .gov domain. We put the domain request process online (no more physical signatures required). The new registrar will enable many future features, like DNS hosting. Moving to the new registrar requires our users to take some actions, which we detailed in an [email to domain registrants](../2023-transition-email/). 

3. **A new website for .gov**: Finally, we’re sharing a *beta version of our new website*, which will help governments learn about .gov and why they should use it. We’re still building and testing [get.gov](https://get.gov/). 

Both the registrar and our new website are being developed as open source software. You can check out the code for [the registrar](https://github.com/cisagov/manage.get.gov){.usa-link--external} and our [public site](https://github.com/cisagov/get.gov){.usa-link--external} on GitHub.

## How these changes impact governments

- *Our contact details are changing*. We’ll begin using <help@get.gov> for email correspondence and end phone support in November.
- *We will pause new domain requests while we transition to the new system*. We anticipate this pause will last from October 2023 until January 2024.
- *Future domain name requests will not require a physical signature*. Our new request process is fully digital, so your ranking official won’t need to sign a letter any longer.
- *Expiration dates will be automatically extended on all domains by one year*. There’s no action needed on your part.
- *You will be responsible for certificate authorization*. Organizations that wish to use Organization Validated or Extended Validation certificates will need a [security contact for your domain](../../help/domain-management/#add-or-update-the-security-email-for-your-gov-domain).

### Changing for better 

We’re building a better and more secure way to get and manage a .gov domain, but we understand change can be hard. We'll work to make these changes as easy as we can for the .gov community, and we welcome your feedback. 

.Gov is infrastructure as a (public) service. This work sets the stage for everything good that will follow. For instance, in response to requests from many of you, we plan to offer DNS hosting for .gov domains by the end of 2024. 

If you have any questions or comments, feel free to [reach out to us](../../contact). 

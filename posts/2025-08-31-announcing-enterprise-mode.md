---
title: From chaos to control – announcing “enterprise mode” 
layout: layouts/post
date: 2025-08-31
author: Kaitlin Abbitt, Cameron Dixon
excerpt: Enterprise mode helps governments administer a portfolio of domains.
tags:
  - posts
  - New feature
---


Most governments with a .gov domain have only one domain. This might seem unsurprising: it’s obvious that government organizations, like private entities, desire a single cohesive brand to use across mediums. Having one domain makes management simple, and simple is good – but [simple is hard](https://www.rfc-editor.org/rfc/rfc1925.html#:~:text=It%20is%20more%20complicated%20than%20you%20think){.usa-link--external}.

Some governments serve large populations, have nationwide missions, or manage a deep portfolio of responsibilities. Governments have brands and sub-brands, too, and this is especially true of federal agencies, state governments, and major metro areas.

We’ve published domain data for [more](https://github.com/cisagov/dotgov-data/commits/main/current-full.csv){.usa-link--external} [than](https://github.com/cisagov/dotgov-data/commits/67f7f981e09d9518c653cb527607031d37ae0f66/dotgov-domains/current-full.csv){.usa-link--external} [10 years](https://github.com/GSA/data/commits/master/dotgov-domains?after=5f2cd6c2adbede6032fb46d19ec0437c0f5758e7+104){.usa-link--external} and it’s now pretty easy for a member of the public to see, for example, that the [Department of Homeland Security has dozens of domains](https://flatgithub.com/cisagov/dotgov-data/blob/main/current-full.csv?filename=current-full.csv&filters=Agency%3Ddepartment%2520of%2520homeland%2520security){.usa-link--external} for various initiatives, but *it’s never been easy for organizations of scale to oversee their own domains holistically*.

**We’re launching “enterprise mode**”, a new suite of features in the [.gov registrar](../2022-09-14-making-infrastructure-less-invisible/#building-a-new-place-to-get-gov-domains) to help governments manage their entire domain portfolio with greater control and efficiency. Enterprise mode **introduces an organizational boundary around domains and offers new roles and permissions** to give officials in technical oversight roles, like CIO offices, a complete view of their .gov footprint.


<figure style="padding: 5px;">
<img width="520" height="328" alt="A simulated domain dashboard in enterprise mode with fake domains alpha.gov, bravo.gov, and charlie.gov shown." src="https://github.com/user-attachments/assets/ad3a11f9-5e18-44aa-aee1-826035ac20b9" title="Screenshot of a domain dashboard in enterprise mode" style="border: 1px solid;"/>
<figcaption style="font-style: italic;">Screenshot of a domain dashboard in enterprise mode</figcaption>
</figure>

## Centralized management for your organization

**In enterprise mode, domains belong to a single organization**, which is a significant change. Previously, administrative information like an address or a senior official had to be updated on each domain individually. Now, this information is centralized, so a single update applies across the entire organization. This also makes staffing changes simpler to reflect in the registrar: when a new person joins the team, they can be given access to all necessary domains in a single step.

To improve oversight and security, the organization’s structure is built around two role types:

* **Org admin**: This role has full permissions to see all registered domains, manage members’ roles, and oversee the entire portfolio. An organization can have multiple admins, though we recommend keeping this number small.
* **Basic member**: Most people in the organization will have this customizable role, and they can be assigned specific permissions by an org admin. The majority of basic members will be [domain managers](../../help/domain-management/#add-a-domain-manager-to-your-gov-domain). 

This new structure introduces critical governance capabilities. When adding basic members, admins can combine permissions to match the tasks their organization needs done without granting more privileges than necessary. For instance, someone could be granted permission to *view* all organization domains without being able to *change* them. Another person may be given permission to submit new domain requests on behalf of the organization, *even if that person doesn’t manage any domains*. 


![Org admins have all actions available to them. Basic members can only see the domain they manage unless an org admin gives additional permissions](../../uploads/images/enterprise-mode-basic-member-no-requests.png "Actions available to org admins and basic members")
<figcaption style="font-style: italic;">The org admin and basic member roles, with optional permissions</figcaption>
</figure>

The org admin role is powerful, but we want to protect users from themselves and maintain system integrity. By design, *an admin is not a domain manager of any domains*. This means that in order to change DNS records, they have to take a series of steps to assign themselves to a domain. This small speed bump was confirmed by our research that showed most admins were unlikely to be domain managers, too. 

## A more secure, efficient domain request process

Since we [launched](../2024-01-31-new-way-to-get-a-.gov/) our new registrar last year, anyone with an [identity-verified Login.gov account](https://www.login.gov/help/verify-your-identity/overview/){.usa-link--external} can submit a request for a .gov domain. As a group, this is a considerable part of the American public – but most people don't work inside government, which means significantly more people can submit a request to us than are actually eligible to register a .gov domain. 

Because there's never been a formal "organization" in the registrar, requests have not been technically limited to a given government entity, not even to entities we know well, like federal agencies. This has allowed would-be impersonators to submit requests "from", for example, the Department of Energy, asking for “thesolarshoe.gov”. We work hard to verify requests are authentic, and we know where to confirm DOE requests, so submissions like these waste everyone’s time. But they remain potentially dangerous for us and for our partners. 

**Enterprise mode secures the domain request process, as only org admins and those they designate can make requests** for a new domain. The submission steps are also streamlined, since there are fewer questions we need to ask of the requesting government. 

For federal agencies in the executive branch, this helps ensure alignment with [M-23-10](../../domains/executive-branch-guidance/), which requires CIO approval of new domain requests. We worked with the Federal CIO’s office at the Office of Management and Budget, which adjudicates executive branch requests, to build the questions they used to ask post-submission right in the initial request flow. We expect this change will decrease the time it takes for their decision.

## The future of .gov domain management
Enterprise mode is the kind of feature you should expect from a domain name registrar built for and by government. In fact, many of our early users told us they assumed this already existed! We’re thrilled to bring it to life.

**Enterprise mode is currently in private preview** to specific organizations, primarily in the federal government. We intend to widen availability to state, territorial, and tribal governments next. Eventually, we expect enterprise mode to be the default experience for everyone. Since some of our users support multiple organizations, we’ll introduce the ability to switch between them soon. **And in 2026, we won’t accept new .gov requests from federal agencies that aren’t through enterprise mode**.

If your organization manages several .gov domains or has more than a handful of domain managers, you might be a good fit for enterprise mode. [We’d welcome hearing from you](https://get.gov/contact/).

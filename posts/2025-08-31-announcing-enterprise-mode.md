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

Most governments with a .gov domain have only one domain. This might seem unsurprising: it's obvious that government organizations, like private entities, desire a single cohesive brand to use across mediums. Having one domain makes management simple, and simple is good – but [simple is hard](https://www.rfc-editor.org/rfc/rfc1925.html#:~:text=It%20is%20more%20complicated%20than%20you%20think).

Some governments serve large populations, have nationwide missions, or manage a deep portfolio of responsibilities. Governments have brands and sub-brands, too, and this is especially true of federal agencies, state governments, and major metro areas.

We’ve published domain data for [more](https://github.com/cisagov/dotgov-data/commits/main/current-full.csv) [than](https://github.com/cisagov/dotgov-data/commits/67f7f981e09d9518c653cb527607031d37ae0f66/dotgov-domains/current-full.csv) [10 years](https://github.com/GSA/data/commits/master/dotgov-domains?after=5f2cd6c2adbede6032fb46d19ec0437c0f5758e7+104) and it’s now pretty easy for a member of the public to see that the [Department of Homeland Security has dozens of domains](https://flatgithub.com/cisagov/dotgov-data/blob/main/current-full.csv?filename=current-full.csv&filters=Agency%3Ddepartment%2520of%2520homeland%2520security) for various initiatives, but *it’s never been easy for organizations of scale to oversee their domains holistically*.

**We’re launching “enterprise mode**”, a new suite of features to help governments manage their entire domain portfolio with greater control and efficiency. Enterprise mode introduces an organizational boundary around domains and offers new roles and permissions to give agency officials in technical oversight roles, like CIO offices, a complete view of their .gov footprint.

## Centralized management for your organization

In enterprise mode, domains belong to a single **organization**, which is a significant change. Previously, administrative information like an address or a senior official had to be updated on each domain individually. Now, this information is centralized, so a single update applies across the entire organization. This also makes staffing changes simpler to reflect in the registrar: when a new person joins the team, they can be given access to all necessary domains in a single step.

The organization's structure is built around clear roles to improve oversight and security:

* **Org admin**: This role has full permissions to see all registered domains, manage members' roles, and oversee the entire portfolio. An organization can have multiple admins, though we recommend keeping this number small.
* **Member**: Most people in the organization will be "members", and they can be assigned specific permissions by an org admin.
* **Domain manager**: A member assigned to manage specific domains.

This new structure introduces critical governance capabilities. For instance, a domain manager can be granted permission to *view* all organization domains without being able to *change* them. An admin can also designate others to submit new domain requests on behalf of the organization, *even if that person doesn't manage any domains*. Permissions can be combined to match the tasks the organization needs done without granting more privileges than necessary.

<figure style="padding: 5px;">
<img width="384" height="422" alt="A graphic depicting the admin and member roles, with available permissions" src="https://github.com/user-attachments/assets/cf3b9712-a070-4670-bc2a-447b22bcf460" title="Screenshot from the 'Add a new member' page" style="border: 1px solid;" />
<figcaption style="fort-style: italic;">Screenshot from the "Add a new member" page</figcaption>
</figure>
  
The admin role is powerful, but we want to protect users from themselves and maintain system integrity. By design, *an admin is not a domain manager of any domains*. This means that in order to change DNS records, they have to take a series of steps to assign themselves to a domain. This small speed bump was confirmed by our research that showed most admins were unlikely to be domain managers, too. 

## A more secure and efficient domain request process

Since we [launched our new registrar](../2024-01-31-new-way-to-get-a-.gov/), anyone with an [identity-proofed Login.gov account](https://www.login.gov/help/verify-your-identity/overview/) can submit a request for a .gov domain. This is a not-small set of the American public, the vast majority of whom are not representatives of eligible governments that may request a .gov domain. Since there's never been a formal organization around domains, we couldn’t limit access to requests solely for the entities we know well, like federal agencies. This has left would-be impersonators to pretend, as one did, that they were the Department of Energy and authorized to request “thesolarshoe.gov”. 

We work hard to verify requests are authentic, and we know where to confirm DOE requests, so submissions like these waste everyone’s time. But they remain potentially dangerous for us and for our partners. 

Enterprise mode secures the domain request process. When turned on for the organization, **only org admins and those they designate can make requests** for a new domain. The request process is also streamlined, since there are fewer questions we need to ask of the requesting government. For federal agencies in the executive branch, this helps ensure alignment with [M-23-10](https://www.whitehouse.gov/wp-content/uploads/2023/02/M-23-10-DOTGOV-Act-Guidance.pdf), which requires CIO approval of new domain requests. We worked with the Federal CIO's office at the Office of Management and Budget, which adjudicates executive branch requests, to build the questions they used to ask post-submission right in the initial request flow. We expect this change will decrease the time it takes for their decision.

## The future of .gov domain management
Enterprise mode is the kind of feature you should expect from a domain name registrar built for and by the government. In fact, many of our early users told us they assumed a feature like this already existed! We’re thrilled to bring it to life.

**Enterprise mode is currently in private preview** to specific organizations, primarily in the federal government. We intend to widen availability to state, territorial, and tribal governments next. Eventually, we expect enterprise mode to be the default experience for everyone. Since some of our users support multiple organizations, we’ll introduce the ability to switch between them soon.

If you manage .gov domains and think your organization might be a good fit for enterprise mode, [we’d welcome hearing from you](https://get.gov/contact/).

---
title: Announcing "enterprise mode"
layout: layouts/post
date: 2025-08-31
author: Kaitlin Abbitt, Cameron Dixon
excerpt: Enterprise mode helps governments administer a portfolio of domains.
tags:
  - posts
  - New feature
---

Most governments with a .gov domain have only one domain. This might seem unsurprising, perhaps even tautological. It's obvious that government organizations, like private entities, desire a single cohesive brand to use across mediums. Having one domain makes management simple, and it improves the public’s ability to identify public services. 

Simple is good – but [simple is hard](https://www.rfc-editor.org/rfc/rfc1925.html#:~:text=It%20is%20more%20complicated%20than%20you%20think).

Some governments serve a very large population, have nationwide missions, or manage a deep portfolio of responsibilities. Governments, again like industry, have brands and sub-brands, and this is especially true of federal agencies, state governments, and major metro areas. [^1]

We’ve published domain data for [more](https://github.com/cisagov/dotgov-data/commits/main/current-full.csv) [than](https://github.com/cisagov/dotgov-data/commits/67f7f981e09d9518c653cb527607031d37ae0f66/dotgov-domains/current-full.csv) [10 years](https://github.com/GSA/data/commits/master/dotgov-domains?after=5f2cd6c2adbede6032fb46d19ec0437c0f5758e7+104) and it’s now pretty easy for a member of the public to see that the [Department of Homeland Security has dozens of domains](https://flatgithub.com/cisagov/dotgov-data/blob/main/current-full.csv?filename=current-full.csv&filters=Agency%3Ddepartment%2520of%2520homeland%2520security) for various initiatives, but *it’s never been easy for organizations of scale to oversee their domains holistically*. We intend to change that.

**We’re launching “enterprise mode**”, a suite of features to help governments manage their entire portfolio of domains. Enterprise mode introduces an organizational boundary to domains and offers new roles and permissions to increase careful management. It particularly empowers agency officials in technical oversight roles, like CIO offices. 

## The organization

In enterprise mode, domains belong to an **organization**. While this has always been true of domains in an administrative sense, it’s now true technically. 

Each organization has a [senior official](https://get.gov/domains/eligibility/#you-must-have-approval-from-a-senior-official-within-your-organization), organization members, and metadata like physical address. Historically, this information has been associated with each individual domain, resulting in change-control challenges when a new senior official was installed or an address changed, as it had to be updated individually across all domains. Now, updates can be made once, centrally.

By default, senior officials don’t have user accounts and their presence is merely documentary. These individuals typically assign their staff to domain management duties and continue working in their executive ways. Senior officials can be domain managers, though, something that is more common among smaller governments. 

## Members and the organization admin

In enterprise mode, each organization has a number of members, and membership is divided into two roles: 

* The “**org admin**” role is a special member that has all available permissions. The admin can see all registered domains for the organization (and their settings), and they can manage members' roles and permissions. An organization can have any number of admins; we recommend as few as deemed prudent.

* Everyone that is not an org admin is a "**member**". Most members of the organization are "domain managers", and they can make changes to the domains they are assigned. 

Enterprise mode introduces a number of permissions that can be assigned to members by an org admin. For instance, a domain manager can be allowed to view all agency domains, while still limited to changing only those they manage. An admin can allow a member to see other members and their domain assignments and permissions. An admin can also designate others with the responsibility to submit new domain requests on behalf of the organization, or view that others have submitted a request, even if they don't manage any domains. Permissions can be combined to match the tasks the organization needs performed without granting more sensitive privileges than necessary.

<figure style="padding: 5px;">
<img width="656" height="721" alt="A graphic depicting the admin and member roles, with available permissions" src="https://github.com/user-attachments/assets/cf3b9712-a070-4670-bc2a-447b22bcf460" title="Screenshot from the 'Add a new member' page" style="border: 1px solid;" />
<figcaption style="fort-style: italic;">Screenshot from the "Add a new member" page</figcaption>
</figure>
  
By default, *an admin is not a domain manager of any domains*. However, as an admin, they can add themselves to any organization domain. This small speed bump was intentional after our research indicated that most potential admins were unlikely to be domain managers. We want to prevent unintentional modification to important DNS records.

## The domain request process

Since we [launched our new registrar](../2024-01-31-new-way-to-get-a-.gov/), anyone with an [identity-proofed Login.gov account](https://www.login.gov/help/verify-your-identity/overview/) can submit a request for a .gov domain. This is a not-small set of the American public, the vast majority of whom are not actually eligible to request a .gov domain. Because there’s never been a formal organizational construct, we couldn’t limit access in our front-end to requests solely for the entities we know well, like federal agencies. This has left would-be impersonators to pretend, as one did, that they were the Department of Energy and authorized to request “thesolarshoe.gov”. 

We work hard to verify requests are authentic, and we know where to confirm DOE requests, so submissions like these waste everyone’s time. But they remain potentially dangerous for us and for our partners. 

Enterprise mode secures the domain request process. When turned on for the organization, **the only people that can make requests for a given organization are the org admin** and anyone else they designate. This is a change for domain managers in enterprise mode, who no longer can make new requests unless granted permission by the org admin.

The request process is also streamlined, since there are fewer questions we need to ask of the requesting government. For federal agencies in the executive branch, this will help ensure alignment with [M-23-10](https://www.whitehouse.gov/wp-content/uploads/2023/02/M-23-10-DOTGOV-Act-Guidance.pdf), where a new request needs the approval of the agency CIO. We’ve worked with the Office of Management and Budget (which adjudicates executive branch requests) and included the questions they used to ask post-submission right in the initial request flow. We expect this change will decrease the time their approval decision takes.

## What’s next?
Enterprise mode is the kind of feature you’d expect from a for-government, by-government domain name registrar. In fact, it's the kind of feature that early users told us they presumed already existed! We're so glad to bring the imagined past from the future into the present. 

**Enterprise mode is currently in private preview** to specific organizations, primarily in the federal government. We intend to widen availability to state, territorial, and tribal governments next. Eventually, we expect enterprise mode to be the default experience for everyone. Since some of our users support multiple organizations, we’ll introduce the ability to switch between them soon.

If you manage .gov domains and think your organization might be a good fit for enterprise mode, [we’d welcome hearing from you](https://get.gov/contact/).

[^1]: Though an [additional domain](https://get.gov/domains/before/#one-domain-per-service) can sometimes be justified, we encourage the use of subdomains (like “service.example.gov”) instead of immediately granting another domain for a sub-brand. Subdomains allow for shared identification to the public and infrastructure independence for the government (sub)organization.

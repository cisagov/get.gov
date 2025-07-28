---
title: Managing your .gov enterprise
layout: layouts/post
date: 2025-08-xx
author: Kaitlin Abbitt, Cameron Dixon
excerpt: “Enterprise mode” helps governments administer a portfolio of domains
tags:
  - posts
  - Program updates
---

Most governments with a .gov domain have only one domain. *This makes sense*: Just like private entities, government organizations desire a single cohesive brand to use across mediums online and off-. Having one domain is simple, and improves the public’s ability to identify public services. Simple is good – but [simple is hard](https://www.rfc-editor.org/rfc/rfc1925.html#:~:text=It%20is%20more%20complicated%20than%20you%20think).

Some governments serve large populations, have nationwide missions, or manage a deep portfolio of responsibilities. It turns out that governments, like industry, have brands and sub-brands, and this is especially true of federal agencies, state governments, and major metro areas. Instead of immediately granting another domain for a sub-brand, we encourage the use of **subdomains** (like “service.example.gov”) because they allow for shared identification and infrastructure independence. Even so, an [additional domain](https://get.gov/domains/before/#one-domain-per-service) can sometimes be justified.

But *more things* means *more things to manage*, and it’s gotten complicated for those with multiple domains.

We’ve published domain data for [more](https://github.com/cisagov/dotgov-data/commits/main/current-full.csv) [than](https://github.com/cisagov/dotgov-data/commits/67f7f981e09d9518c653cb527607031d37ae0f66/dotgov-domains/current-full.csv) [10 years](https://github.com/GSA/data/commits/master/dotgov-domains?after=5f2cd6c2adbede6032fb46d19ec0437c0f5758e7+104) and it’s now pretty easy for a member of the public to see that the [Department of Commerce has dozens of domains](https://flatgithub.com/cisagov/dotgov-data/blob/main/current-full.csv?filename=current-full.csv&filters=Agency%3Ddepartment%2520of%2520commerce) for various initiatives, but **it’s never been easy for organizations with scale to oversee their domains holistically**. We want to change that, offering the kinds of features you’d expect from a for-government, by-government domain name registrar.

**We’re launching “enterprise mode**”, a suite of features to help governments to manage their entire portfolio of domains. Enterprise mode introduces an organizational boundary to domains and offers new roles and permissions to increase careful management. It particularly empowers agency officials in technical oversight roles, like CIO offices.

## “The organization”

In enterprise mode, domains formally belong to an **organization**. While this has always been true of domains in an administrative sense, it’s now true technically. 

Each organization has a [senior official](https://get.gov/domains/eligibility/#you-must-have-approval-from-a-senior-official-within-your-organization), metadata like physical address, and members, including an “org admin**”** role. Historically, this information has been associated with each individual domain, resulting in change-control nightmares when a new senior official was installed or an address changed, as it had to be updated individually across all domains. Now, updates can be made once, centrally.

Senior officials don’t inherently have user accounts. While some senior officials are domain managers, we generally expect them to assign staff to domain management duties and carry on in their executive ways.

## “The org admin”

In enterprise mode, each organization has an “**org admin**” role. An admin can see all registered domains for the organization (and their settings), review domain managers assigned to each domain, and manage membership and permissions for each member. 

Domain managers – those with access to make changes to a domain – are “members” of the organization. By default, domain managers only see the domains they manage, but an admin can now grant permission for members to view all agency domains, see other members in the organization (and their domains/permissions), or delegate the right to make a new domain request for the organization. Admins can also assign others the admin role, in addition to themselves.

By default, *an admin is not a domain manager of any domains*. However, as an admin, they can add themselves to any organization domain. This small speed bump was intentional after our research indicated that most potential admins were unlikely to be domain managers, too, and we want to prevent unintentional modification to important DNS records.

## “The domain request process”

Enterprise mode secures and streamlines the domain request process.

**Anyone with an identity-proofed Login.gov account can submit a request for a .gov domain**. Because there’s never been a formal organizational construct, we couldn’t limit access in our front-end to requests solely for the entities we know well, like federal agencies. This has left would-be impersonators to pretend, as one example, that they were the Department of Energy, authorized to request “thesolarshoe.gov”. 

We work hard to verify requests are authentic, and we know where to confirm DOE requests, so submissions like these waste everyone’s time. But they remain potentially dangerous for us and for our partners. In enterprise mode, *the only people that can make requests for a given organization are the org admin* and anyone else they designate. 

The request process is also streamlined, because there are fewer questions we need to ask. For federal agencies in the executive branch, this will help ensure alignment with [M-23-10](https://www.whitehouse.gov/wp-content/uploads/2023/02/M-23-10-DOTGOV-Act-Guidance.pdf), where a new request needs the approval of the agency CIO. We’ve worked with the Office of Management and Budget, which adjudicates new executive branch requests, to ask more targeted questions and expect they’ll decrease the time to a decision.

## What’s next?

Enterprise mode is currently in private preview to specific organizations, primarily in the federal government. We intend to widen availability to state, territorial, and tribal governments next. Eventually, we expect enterprise mode to be the default experience for everyone. Since some of our users support multiple organizations, we’ll introduce the ability to switch between them soon.

If you manage .gov domains and think your organization might be a good fit for enterprise mode, [we’d welcome hearing from you](https://get.gov/contact/).

---
title: Making infrastructure less invisible
description: We're building a new place to get .gov domains!
layout: layouts/post
date: 2022-09-14
author: Cameron Dixon
excerpt: How we're making .gov the most boringly secure, conventionally unconventional domain for governments.
tags:
  - posts
  - Program updates
  - Security
---
Invisibility is embedded in the concept of infrastructure. The word’s component parts literally mean “to build below.” Though everyone relies on infrastructure, what keeps it below the radar for many people is that it usually just works. Without knowing better, a person could reasonably conclude that life-giving water coming from the tap is boring, or that the miracle of power from an electrical outlet is too obvious to be noteworthy, or that the entire internet emanating from a Wi-Fi access point is simply How It Should Be®. While we concede that last point is true (and that invisible consistency tends to be a trait of good infrastructure), it usually takes a lot of work to achieve those boring “it just works” outcomes.

Over the last year, there’s been a constant stream of activity here at the .gov registry, but most of it hasn’t been on display. This post will highlight some of our work to make .gov the most boringly secure, conventionally unconventional domain for governments.

## Building a new place to get .gov domains

The place to get a domain name is called a registrar. You can go to [many commercial registrars](https://www.icann.org/en/accredited-registrars?sort-direction=asc&sort-param=iana-number&page=1&country=United%20States%20of%20America&view-all=true){.usa-link--external} to get a domain ending with .com or .org (or .us or .agency, [etc.](https://www.iana.org/domains/root/db){.usa-link--external}), but there's only one place to get a .gov domain. That’s currently at https://domains.dotgov.gov, which is a registrar managed by our service provider.

Over the last year, we’ve talked with many current and potential .gov registrants to assess their needs, and [we released a request for information](https://sam.gov/opp/78749b4fc58145568148dbdecfa83f6d/view){.usa-link--external} to solicit feedback on the idea of building a new, [CISA](https://www.cisa.gov/)-maintained registrar. (CISA is the U.S. government agency that manages .gov.) One might ask: why would you consider building something new instead of using a commercial registrar?

1. **Relationships**: We’re Government People, and other Government People are our people! We want to keep the social and technical loop between us as short as possible.
2. **Cost**: Registrar providers typically make money by taking a cut of a registration’s proceeds. As you may know, [we removed registration and renewal fees for .gov domains](todo) last year, so there’s not anything to take a cut from.
3. **Flexibility**: We’re a bespoke top-level domain for U.S.-based government organizations. We want to minimize complexity for the people working in those institutions (so they can focus on more important things) and streamline our adjudication (so we can ensure requests are authentic). Ensuring that .gov domains are neither [too easy](https://krebsonsecurity.com/2019/11/its-way-too-easy-to-get-a-gov-domain-name/){.usa-link--external} nor too hard to obtain is a balance we want to strike, and it requires flexibility as technology and processes change – including the ability to shift service providers. We want the ability to enhance the security of government organizations, prioritizing more-than-DNS features in-registrar.

We concluded that the best course of action for us and our users would be to build a new registrar. Today we’re announcing that we’ve begun that work with the designers, engineers, and product professionals at [18F](https://18f.gsa.gov/){.usa-link--external}, a digital services team inside government. We’ve admired 18F’s work for many years and are so pleased to partner together! We’re [building the registrar on GitHub](https://github.com/cisagov/getgov){.usa-link--external}, we’re [hiring a software engineer](https://www.usajobs.gov/job/674331100){.usa-link--external} to lead our development work into the future, and we anticipate additional opportunities to help build the new .gov registrar soon.

## Acquiring registry services

Earlier this summer, we released a [request for proposal](https://sam.gov/opp/3f4c856984a04648b8f7bebf003920d3/view){.usa-link--external} for registry services providers. Though the .gov registry at CISA manages the policies and procedures for obtaining a .gov domain (and thus, the contents of the .gov zone file), we don’t operate the infrastructure to make that file available for global resolution in the domain name system (DNS), something multiple expert providers specialize in. We also want to offer DNS hosting services to our users. In addition to approving domain names, we want to put that domain on the internet without a requirement for a government to operate (or obtain services to operate) their own DNS name server (unless they want to, of course).

We anticipate making an award before the end of Fiscal Year 2022 (September 2022).

## Publishing the .gov zone file

When you need to go to a .gov site or send an email to your favorite government organization, your computer often has to ask another computer where that .gov domain is located. The DNS is what makes this possible. Through a series of questions and answers between different computers, you’ll eventually be told the address of the place you’re trying to get to.

The file that provides the location of all registered .gov domains on the internet is called the .gov zone file. Though we have published the [list of .gov domains](../../about/data) for several years (which was [originally published in 2014 with assistance from 18F!](https://18f.gsa.gov/2014/12/18/a-complete-list-of-gov-domains/){.usa-link--external}), that list provides only metadata about each domain, like the name and type of government that registered it and where they are geographically.

In order to increase transparency into and security of the .gov domain, we have published the [.gov zone file](../../about/data), which we’ll update periodically. Our intention is for the file to be accessible to researchers to enhance understanding into the operations of our DNS and the resilience of our namespace.

We also anticipate publishing the file in [ICANN’s Centralized Zone Data Service](https://czds.icann.org/help){.usa-link--external} soon (**January 2023 update**: now available). As the name indicates, CZDS is a place where many domain registries make their zone file available, typically pursuant to an agreement with ICANN. Though we have [no registry agreement](https://www.icann.org/en/registry-agreements?first-letter=a&sort-column=top-level-domain&sort-direction=asc&page=1){.usa-link--external} with ICANN, we believe that publishing in CZDS affords a wider availability of the file in a place where many are familiar with requesting them. Though a CZDS account will be necessary to request the file, the .gov registry won’t receive requests for the file: they’ll all be automatically approved.

In reality, the contents of the zone file have always been publicly available, but it has required asking the DNS the right questions. We’re excited to learn from others’ research on the file. We encourage other registries that lack an external requirement to publish their zone files to make them more readily accessible.

## Easing the transition to .gov

Most governments come to us having already established an online home at a non-.gov domain, like .org or .us. Though we share [guidance on how to request a .gov domain](../../domains/before), the .gov registry has never shared advice on how new registrants should actually transition to a .gov domain. There's a certain logic to that. Registries are often seen as digital real estate agencies, not general contractors and not movers.

We think we can do a bit more to help governments think through the technological, branding, and communications impacts of a new domain, so we’ve published a guide we’ve affectionately titled [What to think about when you’re thinking about moving to .gov](../../domains/moving). The document is necessarily generic, but we anticipate it will be a useful, internal conversation piece to help governments develop specific lines of work for transition planning.

If you have ideas on how the document can be improved, we’d welcome suggestions on GitHub or at dotgov@cisa.dhs.gov.

## Ending support for fed.us

In times past, some federal agencies used a domain name under the [fed.us locality space](https://www.about.us/policies/ustld-locality-based-structure){.usa-link--external}. Registrations in fed.us [formally ended in 2017](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-06.pdf#page=11){.usa-link--external}, and in early 2022 there were only five remaining domains.

In order to prioritize our resources on .gov, we will stop resolution of the fed.us zone in mid-October 2022.

## Collecting non-.gov domains

Under the [Federal Zero Trust Strategy](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf#page=19){.usa-link--external}, we’re working with partners at the General Services Administration to collect the non-.gov domains that federal agencies use. If you see any that should be added to the list, report them at [https://search.gov/about/policy/govt-urls.html](https://search.gov/about/policy/govt-urls.html){.usa-link--external}.

## Making it harder to impersonate U.S.-based governments

### Stemming DNS abuse in non-.gov space

.Gov’s purpose is to make it easy for the public to know that an online service is Actually Government. When others impersonate U.S.-based governments, especially those with a .gov domain, we want to know about it.

We occasionally receive emails from security practitioners where someone has registered a non-.gov domain and uses it to maliciously impersonate a government org to someone else. This often includes fraudulent invoice requests, fake procurement invitations, or malware-laced attachments. In the past, we have had success routing this information to registrars and registries, who, after reviewing our evidence and theirs, have voluntarily taken down impersonating domains.

We want to make the informal formal. **If you see a U.S.-based government organization being impersonated online, let us know at dotgov@cisa.dhs.gov.** Share whatever you’d like, but it’s most useful when we have, for example, email messages with headers or the attachment that was sent. We’ll carefully review the information, raise it for takedown consideration when appropriate, and be as transparent as possible about what steps we are taking.

### Supporting a novel approach to prevent email impersonation

DMARC is an email authentication standard that makes it hard to successfully spoof a domain in email; CISA [mandated its use](https://www.cisa.gov/binding-operational-directive-18-01) in federal civilian executive branch agencies in 2017. But DMARC only protects individual domain registrations and subdomains, not a top-level domain (TLD) like .gov.

With the publication of [RFC 9091](https://datatracker.ietf.org/doc/rfc9091/){.usa-link--external} last year, that limitation is being reconsidered. The RFC is an experimental specification that would allow a “multi-organization public suffix domain that requires DMARC” – like .gov could require in the future – to become aware when someone impersonates a domain in email, including a non-existent domain. To be clear, the .gov registry has not mandated DMARC for .gov domains, though [we recommend its use](../../domains/security/#use-dmarc-email-authentication-method) and believe the benefits of technically enforcing a DMARC requirement would be a useful capability to protect the public.

To signal support for this RFC, we published a TXT record signaling a nominal DMARC policy for the TLD at \_dmarc.gov, and we were added to the [experimental registry](https://psddmarc.org/registry.html){.usa-link--external} of other interested TLDs.

## Publishing a Congressional report

The [DOTGOV Act of 2020](https://uscode.house.gov/statviewer.htm?volume=134&page=2298){.usa-link--external} had several Congressional reporting requirements for the .gov registry. We’ve published a report, [Operational and Contractual Transition of the .gov Internet Program](https://get.gov/assets/transition-report-to-congress.pdf), which details the actions we took in moving the .gov registry to CISA.

## Making the invisible visible

We think infrastructure like the .gov domain is worth making less invisible, so we’ll continue to share updates about it online. We know that many government organizations simply need routine, “boring” operations so they can focus on their other goals. We’re excited to fulfill both needs for governments across the nation.












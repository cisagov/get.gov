---
title: An intent to preload
description: Governments should be easy to identify on the internet and users should be secure on .gov websites.
layout: layouts/post
date: 2021-06-21
author: Cameron Dixon
excerpt: Governments should be easy to identify on the internet and users should be secure on .gov websites. Today, the DotGov Program announces our intent to preload the .gov TLD.
tags:
  - posts
---

When the public sees information on a .gov website, they are likely to trust that it is official and accurate. This trust is warranted, since registration of a .gov domain is limited to bona fide US-based government organizations. Governments should be easy to identify on the internet and users should be secure on .gov websites.

HTTPS is a key protection for websites and web users. It offers security and privacy when connecting to the web, and provides governments the assurance that what they publish is what is delivered to users. In the last few years, HTTPS has become the default connection type on the web. Browsers that were once telling users to “watch for a green lock!” are now removing the lock icons. Instead, the browser warns users when sites are not using HTTPS.

{% image "_img/securedotgov.png" "Governments should never be not secure" %}
*Governments should never be "not secure"*

## HSTS and preloading

An additional protection, HTTP Strict Transport Security (HSTS), is a simple standard that protects visitors by ensuring that their browsers always enforce an HTTPS connection to a website. It also eliminates the ability to click through a certificate error–protecting users from attack.

For a user to take advantage of HSTS, however, their browser has to see the HSTS header on a site at least once. This means that users are not protected until after their first successful secure connection to a given domain, which [may not occur in certain cases](https://https.cio.gov/hsts/#hsts-preloading){.usa-link--external}.

To solve this problem, a domain can be submitted to the [HSTS preload list](https://hstspreload.org/){.usa-link--external}, a list of domains embedded into browsers that get HSTS enabled automatically, even for the first visit. **Domains that preload protect their entire “namespace,”** including all current or potential subdomains. Since May 2017, we’ve been [automatically preloading](https://www.cio.gov/2017/01/19/automatic-https.html){.usa-link--external} new federal executive branch .gov domains. In August 2018, we began allowing all other newly registered .gov domains to opt into this protection.

While individual opt-in actions are valuable, **preloading can also be applied to a top-level domain (TLD)**, protecting the entire zone. Preloading a domain is both a smart security move and an easy thing to do, if the TLD begins with no deployed services to transition. Preloading an existing TLD is substantially more challenging than preloading a new one, because preloading requires that HTTPS be supported everywhere the domain is used for web services, including sites on both the internet and intranet alike.

## Preloading .gov

oday, the DotGov Program announces our **intent to preload the .gov TLD**. We believe the security benefits that come from preloading are meaningful and necessary to continue meeting the public’s expectation of safety on .gov services. We believe that government websites should always be secure.

Note that we’re announcing an intent to preload the TLD, but not actually preloading it today. If we did that, some government websites that don’t offer HTTPS would become inaccessible to users, and we don’t want to negatively impact services on our way to enhancing them! Actually preloading is a simple step, but getting there will require concerted effort among the federal, state, local and tribal government organizations that use a common resource, but don’t often work together in this area.

With concerted effort, we could preload .gov within a few years. In order to support that goal and ascertain a feasible target deadline, **we are taking the following steps**:

1. We are collaborating with the Cybersecurity and Infrastructure Security Agency (CISA) to help ensure .gov domain owners are ready for their domains to be preloaded in the future.
2. We are teaming up with government-affiliated civic organizations to hold **presentations and listening sessions** in the coming months to get the word out about preloading .gov.
3. We have created a new listserv for **feedback from government agencies**. In particular, we’d like to hear the challenges agencies expect to face, and the solutions they develop that we can all use to resolve them. It’s our hope that this new communications channel will generate discussion between government organizations. Email dotgovhttps@listserv.gsa.gov to request to join.
4. **Beginning September 1, 2020, all new .gov domains will be automatically preloaded**. This ensures that we’re focused on transitioning historical domains, not new ones, and defaults to strong security going forward.

After input from the community, we’ll announce a target preloading date at a future time. For now, we’ve all got some work to do.



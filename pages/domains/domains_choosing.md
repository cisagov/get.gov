---
title: Choosing your .gov domain name
permalink: /domains/choosing/
layout: layouts/info-page
sidenav: true
excerpt: Requirements and tips for .gov domain names
tags: domains
eleventyNavigation:
  key: domains
  order: 6
  title: Choosing your .gov domain name
---

<script>
    function checkDomainAvailability() {
        // Cancel the default action
        event.preventDefault();
        
        const baseUrl = "https://manage.get.gov/api/v1/available/?domain="

        var requested_domain = document.getElementById('domain-input').value

        if (requested_domain === null || requested_domain.length === 0) {
            render_result(``)
        }

        var searchEndpoint = new URL("", baseUrl + requested_domain);
        
        fetch(searchEndpoint).then(function(reply) {
            return reply.json()
        }).then(function(response) {
            var requested_domain_display_string = requested_domain
                if (!requested_domain_display_string.endsWith('.gov')) {
                    requested_domain_display_string += '.gov'
                }
            if (response.available) {
                render_result(`
                <div class="usa-alert usa-alert--success usa-alert--slim" role="alert">
                    <div class="usa-alert__body">
                        <p class="usa-alert__text">
                            That domain is available!
                            <a class="usa-link" href="{{ '/domains/before/' | url }}">
                                Read about next steps to take before requesting your .gov domain.
                            </a>
                        </p>
                    </div>
                </div>
                `
                )
            } else {
                render_result(`
                <div class="usa-alert usa-alert--error usa-alert--slim" role="alert">
                    <div class="usa-alert__body">
                        <p class="usa-alert__text">
                            ${response.message} 
                        </p>
                    </div>
                </div>
                `
                )
            }
        }).catch(function(err) {
            console.log('parsing failed', err);
        })
    }

    function render_result(content, append = true){
      document.getElementById('usa-search--domain_message').innerHTML = (append == true) ? content : `<div></div>`;
    }
    
</script>

## Start your .gov domain search
Check if the .gov domain you want is available. We'll work with you to find the best domain for your organization that meets our requirements. 
<form class="usa-search usa-search--domain-choosing" role="search">

  <div class="grid-row">
    <div class="grid-col grid-col__input-grid">
      <label class="usa-sr-only" for="domain-choosing-input">Search</label>
      <input
        id="domain-choosing-input" 
        class="usa-input" 
        type="search" 
        aria-label="Check Domain Name input"
        title="Check Domain input"
      />
      <span class="padding-left-05">.gov</span>
    </div>
  </div>

  <div class="grid-row margin-top-2">
    <div class="grid-col">
      <button 
      class="usa-button" 
      type="submit"
      onclick="checkDomainAvailability()"
      onsubmit="return false"
      aria-label="Check availability of Domain Name"
      title="Check Domain Availability"
      >
        Check availability
      </button>
    </div>
  </div>
</form>
<div class="usa-search--domain_message" id="usa-search--domain_message"></div>

## General rules for .gov domain names
Your domain name represents your organization and your services to the world online. Good domain names are memorable and easy to say out loud (like over the phone or in a presentation).

Names of government organizations can be similar or even identical, so our domain naming rules aim to prevent confusion.

{% include 'content-blocks/general_domain_requirements.md' %}

## Only federal agencies can request generic terms
Only federal agencies can request generic terms like vote.gov or benefits.gov.

That said, we can approve domains with generic terms, like marylandvotes.gov, because it references a location and a service.


## Things to avoid in .gov domain names
Avoid using the following in your .gov domain name:
- Dashes or hyphens
- Numbers
- Misspellings


## Domain name requirements and guidance for specific types of organizations
.Gov domain names must follow the naming requirements for your type of organization. Read domain name requirements and guidance for:
- [Executive branch federal agencies](#executive-branch-federal-agencies)
- [Judicial branch federal agencies](#judicial-branch-federal-agencies)
- [Legislative branch federal agencies](#legislative-branch-federal-agencies)
- [Interstate organizations](#interstate-organizations)
- [U.S. states and territories](#u.s.-states-and-territories)
- [Tribal governments](#tribal-governments)
- [Counties](#counties)
- [Cities](#cities)
- [Special districts](#special-districts)
- [School districts](#school-districts)

### Executive branch federal agencies
These are agencies of the U.S. government’s executive branch. Read [guidance specifically for executive branch federal agencies](../executive-branch-guidance).

Examples:
- fema.gov
- medicare.gov
- usda.gov

### Judicial branch federal agencies
These are agencies of the U.S. government’s judicial branch.

Examples:
- uscourts.gov
- ustaxcourt.gov
- ussc.gov

### Legislative branch federal agencies
These are agencies of the U.S. government’s legislative branch.

Examples:
- gao.gov
- gpo.gov
- loc.gov

### Interstate organizations
These are organizations of two or more states.

Examples:
- EMScompact.gov
- wmataOIG.gov
- trpa.gov


### U.S. states and territories
This includes the 50 U.S. states, the District of Columbia, American Samoa, Guam, Northern Mariana Islands, Puerto Rico, or the U.S. Virgin Islands.

State .gov domains must include the two-letter state abbreviation or clearly spell out the state name. 

Examples:
- AmericanSamoa.gov
- Colorado.gov
- MN.gov
- Guam.gov

### Tribal governments
Tribal governments recognized by the federal or a state government.

Tribal domains may include the suffix -nsn, for native sovereign nation.

Examples:
- tbyi.gov
- pitu.gov
- TulalipTribalCourt-nsn.gov

### Counties
This organization type includes counties, parishes, or boroughs.

Most county .gov domains must include the two-letter state abbreviation or the full state name. County names that aren’t shared by any other city, county, parish, town, borough, village or equivalent in the U.S. (at the time a domain is granted) don’t have to refer to their state in their domain name. Counties can include “county” in their domain to distinguish it from other places with similar names. 

We use the [Census Bureau’s National Places Gazetteer Files](https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html){.usa-link--external} to determine if county names are unique.

Examples:
- LACounty.gov
- LivingstonParishLA.gov
- MitchellCountyNC.gov
- MiamiDade.gov

### Cities
This organization type includes cities, towns, townships, villages, etc.

Most city domains must include the two-letter state abbreviation or clearly spell out the state name. Using phrases like “City of” or “Town of” is optional.

Cities that meet one of the criteria below don’t have to refer to their state in their domain name.

- The city name is not shared by any other U.S. city, town, village, or county. We use the [Census Bureau’s National Places Gazetteer Files](https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html){.usa-link--external} to determine if names are unique.

- The city is so well known that it doesn’t need a state reference to communicate location. We use the list of U.S. “dateline cities” in the Associated Press Stylebook as part of our decision.

- It’s one of the 150 largest cities by population, according to the Census Bureau.
  
Examples:
- CityofEudoraKS.gov
- WallaWallaWA.gov
- Pocatello.gov

### Special districts
These are independent organizations within a single state.

Domain names must represent your organization or institutional name, not solely the services you provide. It also needs to include your two-letter state abbreviation or clearly spell out the state name unless city or county exceptions apply.

Examples:
- GlacierViewFire.gov
- TechshareTX.gov
- UtahTrust.gov

### School districts
School districts that aren’t part of a local government are eligible for .gov domains.

Domain names must represent your organization or institutional name.

Example:
- mckinneyISDTX.gov
- BooneCSDIA.gov




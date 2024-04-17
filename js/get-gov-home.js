function checkDomainAvailability(alertId="usa-search--domain_message", isDomainChoosing=false) {

    // Cancel the default action
    event.preventDefault();
    
    const baseUrl = "https://manage.get.gov/api/v1/available/?domain="

    let requested_domain = document.getElementById('domain-input').value

    if (requested_domain === null || requested_domain.length === 0) {
        render_result(``)
    }

    let searchEndpoint = new URL("", baseUrl + requested_domain);
    fetch(searchEndpoint).then(function(reply) {
        return reply.json()
    }).then(function(response) {
        let requested_domain_display_string = requested_domain
            if (!requested_domain_display_string.endsWith('.gov')) {
                requested_domain_display_string += '.gov'
            }
        
        let successMessage = `
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

        let errorMessage = null
        if (isDomainChoosing) {
            errorMessage = document.getElementById("grid-row--domain_message-choosing");
            if (errorMessage) {
                // Check if the 'display-none' class is not already present
                if (!errorMessage.classList.contains("display-none")) {
                    errorMessage.classList.add("display-none");
                }
            }

            successMessage = `
            <div class="usa-alert usa-alert--success usa-alert--slim" role="alert">
                <div class="usa-alert__body">
                    <p class="usa-alert__text">
                        That domain is available!
                        <div class="display-inline"></div>
                        <strong>We’ll try to give you the domain you want, but it's not guaranteed.</strong>
                        <a class="usa-link" href="{{ '/domains/before/' | url }}">
                            Read about next steps to take before requesting your .gov domain.
                        </a>
                    </p>
                </div>
            </div>
            `
        }

        let failMessage = `
        <div class="usa-alert usa-alert--error usa-alert--slim" role="alert">
            <div class="usa-alert__body">
                <p class="usa-alert__text">
                    ${response.message} 
                </p>
            </div>
        </div>
        `

        if (response.available) {
            render_result(alertId, successMessage)
        } else if (isDomainChoosing && response.message.includes("That domain isn’t available.")){
            let unavailableMessage = `
            <div class="usa-alert usa-alert--error usa-alert--slim" role="alert">
                <div class="usa-alert__body">
                    <p class="usa-alert__text">
                        That domain isn’t available.
                    </p>
                </div>
            </div>
            `
            render_result(alertId, unavailableMessage)
            /* TODO: Ticket #267
            <a class="usa-link" href="{{ '/domains/whois/' | url }}?domain=${requested_domain_display_string}">
                Learn about this domain.
            </a> 
            */
        }
        else {
            render_result(alertId, failMessage)
        }

        if (isDomainChoosing && errorMessage) {
            errorMessage.classList.remove("display-none");
        }
    }).catch(function(err) {
        console.log('parsing failed', err);
    })
}

function render_result(elementId, content, append = true){
    document.getElementById(elementId).innerHTML = (append == true) ? content : `<div></div>`;
}

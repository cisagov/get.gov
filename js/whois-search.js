function renderWhoisData(whoisJson={}, searchId="domain-input") {
    
}

function searchWhoisData(searchId="domain-input") {
    event.preventDefault();

    const whoisServer = 'whois.dotgov.gov';
    const rdapBaseUrl = 'rdap.cloudflareregistry.com/rdap/domain/';

    let domain = document.getElementById(searchId).value

    if (domain === null || domain.length === 0) {
        render_result(``)
    }

    let rdapSearchEndpoint = new URL("", rdapBaseUrl + domain);
    fetch(rdapSearchEndpoint).then(function(reply) {
        console.log(reply.json())
    })


    // fetchWhoisData(domain, whoisServer, (err, data) => {
    //     if (err) {
    //         console.error('Error:', err);
    //     } else {
    //     // totally complex way to just prove the whois shows as a string
    //         console.log('WHOIS data:', data);
    //     }
    // }).then(function(whoisData) {
    //     render_result('whois-lookup', whoisData) 
    // })
}

// function fetchWhoisData(domain, server, callback) {
//     const client = net.createConnection({ port: 43, host: server }, () => {
//         client.write(`${domain}\r\n`);
//     });

//     let whoisData = '';
//     let whoisJson = {};

//     client.on('data', (data) => {
//         whoisData += data.toString();
//         return whoisData;
//     });

//     client.on('end', () => {
//         callback(null, whoisData);
//     });

//     client.on('error', (err) => {
//         callback(err);
//     });
// }

function render_result(elementId, content, append = true){
  document.getElementById(elementId).innerHTML = (append == true) ? content : `<div></div>`;
}
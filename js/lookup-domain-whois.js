const net = require('net');

// Initialize Cloudflare WHOIS server
const whoisServer = 'whois.dotgov.gov';

function parseWhoisData(whoisDataStr) {
    const lines = whoisDataStr.split('\n');
    const result = {};

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
            // Extract the key and value, trim whitespace
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            // Add the key-value pair to the result object
        }
    })
}

function fetchWhoisData(domain, server, callback) {
    const client = net.createConnection({ port: 43, host: server }, () => {
        client.write(`${domain}\r\n`);
    });

    let whoisData = '';
    let whoisJson = {};

    client.on('data', (data) => {
        whoisData += data.toString();
        return whoisData;
    });

    client.on('end', () => {
        callback(null, whoisData);
    });

    client.on('error', (err) => {
        callback(err);
    });
}

// Perform WHOIS query
fetchWhoisData(domain, whoisServer, (err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
       // totally complex way to just prove the whois shows as a string
        console.log('WHOIS data:', data);
    }
});

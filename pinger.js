// pinger.js
const fs = require('fs');
const path = require('path');

/**
 * Reads URLs from the sites.json file.
 * @returns {string[]} An array of URLs.
 */
const getUrlsToPing = () => {
    try {
        const filePath = path.join(__dirname, 'sites.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        
        if (!data.sites || !Array.isArray(data.sites)) {
            console.error("Error: 'sites.json' is missing the 'sites' array.");
            return [];
        }
        return data.sites;
    } catch (error) {
        console.error("Error reading or parsing sites.json:", error);
        return [];
    }
};

/**
 * Pings a list of URLs and logs their status.
 */
const pingSites = async () => {
    const urls = getUrlsToPing();

    if (urls.length === 0) {
        console.log("No sites found in sites.json. Exiting.");
        return;
    }

    console.log("-----------------------------------------");
    console.log(`Starting ping process at ${new Date().toUTCString()}`);
    console.log("Pinging the following sites:");
    urls.forEach(url => console.log(`- ${url}`));
    console.log("-----------------------------------------");

    const pingPromises = urls.map(url => 
        fetch(url, {
            method: 'GET',
            headers: { 'User-Agent': 'Public-GitHub-Pinger/1.0' }
        })
        .then(response => {
            console.log(`✅ SUCCESS: ${url} | Status: ${response.status} ${response.statusText}`);
        })
        .catch(error => {
            console.error(`❌ FAILED:  ${url} | Error: ${error.message}`);
        })
    );

    await Promise.all(pingPromises);
    
    console.log("\nAll pings complete.");
    console.log("-----------------------------------------");
};

pingSites();
const component = process.env.INPUT_COMPONENT;
const versionname = process.env.INPUT_VERSIONNAME;
const description = process.env.INPUT_DESCRIPTION;

const hostname = process.env.INPUT_HOSTNAME;
const username = process.env.INPUT_USERNAME;
const password = process.env.INPUT_PASSWORD;
const disableSSLVerification = process.env.INPUT_DISABLESSLVERIFICATION === 'true';
const port = process.env.INPUT_PORT;
const https = require('https');
const date = new Date();
const currentDateTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "." + date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();

import('node-fetch')
  .then((module) => {
    const fetch = module.default;
    const apiUrl = 'https://' + hostname + ':' + port + '/cli/version/createVersion?component=' + component + '&name=' + (versionname.length > 0 ? versionname : currentDateTime) + '&description=' + description + '&importing=true';

    console.log("Triggering creation of new UCD component version with " + apiUrl);

    const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

    const httpsAgent = new https.Agent({
      rejectUnauthorized: disableSSLVerification === 'true'
    });

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': authHeader // Include the basic authentication header
      },
      agent: httpsAgent
    })
      .then(response => response.json())
      .then(result => {
        console.log('API response:', result);
        versionId = result.id;
        console.log('Component Version ID:', versionId);
      })
      .catch(error => {
        console.error('Unable to create component version in UCD : ', error);
        throw new Error("Terminating!! ");
      })
      .then(() => {
        // Mark the component version creation/import as 'finished' so any
        // configured Deployment Triggers will fire.
        const finishUrl = 'https://' + hostname + ':' + port + '/cli/version/finishedImporting?component=' + component + '&version=' + (versionname.length > 0 ? versionname : currentDateTime);

        console.log("Finishing creation of new UCD component version with " + apiUrl);
        fetch(finishUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': authHeader // Include the basic authentication header
          },
          agent: httpsAgent
        })
        .catch(error => {
          console.error('Unable to mark component version as finished : ', error);
          throw new Error("Terminating!! ");
        });
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });







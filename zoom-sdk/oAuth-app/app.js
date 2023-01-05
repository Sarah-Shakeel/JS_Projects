var request = require("request");

var options = {
  method: 'POST',
  url: 'https://zoom.us/oauth/token',
  qs: {
   grant_type: 'authorization_code',
   //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
   code: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IncwbXI4U280U3dHQ1NEX0VYQy1ZZlEiLCJleHAiOjE2MzczMDQ1NjYsImlhdCI6MTYzNjY5OTc2Nn0.uTgUmX5-5y8fn3sJ4QbHPNiwBUqlIGhyE_pmN9LSq-o',
   //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
   redirect_uri: 'https://google.com'
  },
  headers: {
    /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
    **/
    //  app_client_id: 'w0mr8So4SwGCSD_EXC-YfQ',
    //  app_client_secret: 'EaegqlqA6cyJeFBaiqgagj3iiahpnlPt1lbU',
   Authorization: Buffer.from("w0mr8So4SwGCSD_EXC-YfQ" + ':' + "EaegqlqA6cyJeFBaiqgagj3iiahpnlPt1lbU").toString('base64')
  }
};

  request(options, function(error, response, body) {
   if (error) throw new Error(error);

   console.log(body);
  });


//Make Zoom API call
var options = {
  uri: 'https://api.zoom.us/v2/users',
  qs: {
      status: 'active' // -> uri + '?status=active'
  },
  auth: {
    //Provide your token here
      'bearer': 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IncwbXI4U280U3dHQ1NEX0VYQy1ZZlEiLCJleHAiOjE2MzczMDQ1NjYsImlhdCI6MTYzNjY5OTc2Nn0.uTgUmX5-5y8fn3sJ4QbHPNiwBUqlIGhyE_pmN9LSq-o'
  },
  headers: {
      'User-Agent': 'Zoom-Jwt-Request',
      'content-type': 'application/json'
  },
  json: true // Automatically parses the JSON string in the response
};

rp(options)
  .then(function (response) {
    //logic for your response
      console.log('User has', response);
  })
  .catch(function (err) {
      // API call failed...
      console.log('API call failed, reason ', err);
  });
//include required modules
const jwt = require('jsonwebtoken');
const config = require('./config');
const rp = require('request-promise');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
let email;
let meetingId;
const port = 3000;

//Use the ApiKey and APISecret from config.js
const payload = {
    iss: config.APIKey,
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, config.APISecret);


//get the form 
app.get('/', (req,res) => res.send(req.body));

//create zoom meeting endpoint
app.post("/newMeeting", (req, res) => {
    email = 'sarah.shakeel@synavos.com';
    console.log(email);
    var options = {
      method: "POST",
      uri: "https://zoom.us/oauth/authorize",
      body: {
       response_type: "code",
       redirect_uri	: "https://google.com",
       client_id	: "PoYKXf_ERYmbricLlbzY2g"
      },
      auth: {
        bearer: token
      },
      headers: {
        "User-Agent": "Zoom-api-Jwt-Request",
        "content-type": "application/json"
      },
      json: true //Parse the JSON string in the response
    };
    
//Use request-promise module's .then() method to make request calls.  
    rp(options)
      .then(function(response) {
        console.log("response is: ", response);
        res.send("create meeting result: " + JSON.stringify(response));
      })
      .catch(function(err) {
        // API call failed...
        console.log("API call failed, reason ", err);
      });
});

// add users in the zoom meeting from backend
// app.post('/add-users/meetingId', (req,res) => {
//     const data = req.body;
//     meetingCtrl.addUsers(req.params).then((result) => {
//         res.status(OK).send(result);
//     }).catch((error) => {
//         res.status(UnAuthorized).send(error);
//     })
// })


/*app.post("/add-users/:meetingId", (req, res) => {
  var options = {
    method: "POST",
    meetingId: req.params,
    uri: "https://api.zoom.us/v2/accounts/{accountId}/meetings/" + meetingId + "/registrants",
    body: {
        email,
        first_name,
        last_name,
        address,
        city,
        country,
        zip,
        state,
        phone,
        industry,
        org,
        job_title,
        purchasing_time_frame,
        role_in_purchase_process,
        no_of_employees,
        comments,
        custom_questions
    },
    auth: {
      bearer: token
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json"
    },
    json: true //Parse the JSON string in the response
  };
  
//Use request-promise module's .then() method to make request calls.  
  rp(options)
    .then(function(response) {
      console.log("response is: ", response);
      res.send("adding users result: " + JSON.stringify(response));
    })
    .catch(function(err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
var request = require("request");

var options = {
	method: 'GET',
	// A non-existing sample userId is used in the example below. 
	url: 'https://api.zoom.us/v2/users/sarah.shakeel@synavos.com/meetings',
	headers: {
		authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IncwbXI4U280U3dHQ1NEX0VYQy1ZZlEiLCJleHAiOjE2MzczMDQ1NjYsImlhdCI6MTYzNjY5OTc2Nn0.uTgUmX5-5y8fn3sJ4QbHPNiwBUqlIGhyE_pmN9LSq-o' // Do not publish or share your token publicly.
	}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
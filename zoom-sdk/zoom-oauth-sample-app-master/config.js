const env = 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	// production:{	
	// 	APIKey : 'PoYKXf_ERYmbricLlbzY2g',
	// 	APISecret : 'jLDlb3fP5umvd6QqaJ64FW7FPHK1upAR'
	// },

PORT= 5292,
clientID = 'PoYKXf_ERYmbricLlbzY2g' ,
clientSecret= 'jLDlb3fP5umvd6QqaJ64FW7FPHK1upAR',
redirectURL= 'www.google.com'
};

module.exports = config[env]
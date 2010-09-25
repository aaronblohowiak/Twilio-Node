var restler = require('restler-aaronblohowiak');

//this is lifted from http://github.com/guille/node.twilio.js/blob/master/lib/node.twilio/client.js
this.client = function(sid, token, version){
	return new restler.Service({
		baseURL: 'https://api.twilio.com/' + (version ? version: '2010-04-01') + '/',	
		username: sid,
		password: token			
	});
};


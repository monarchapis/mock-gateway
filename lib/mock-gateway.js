var proxy = require('proxy-middleware'),
	url = require('url'),
	jwt = require('jsonwebtoken');

module.exports = {
	proxyApi: function(baseUrl) {
		var proxyUrl= (baseUrl || 'http://localhost:8080');
		var options = url.parse(proxyUrl);

		return proxy(options);
	},

	setAuthorization: function(secret, generate) {
		return function(req, res, next) {
			var claims = generate(req, res) || {};
			var token = jwt.sign(claims, secret);
			var authorize = 'Bearer ' + token;
			req.headers['Authorization'] = authorize;
			next();
		}
	}
}
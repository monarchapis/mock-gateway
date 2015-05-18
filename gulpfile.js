var gulp = require('gulp'),
	connect = require('gulp-connect'),
	mock = require('./lib/mock-gateway.js');

var baseUrl = 'http://localhost:8080';
var base64secret = '';
var secret = new Buffer(base64secret, 'base64');

function buildClaims(req) {
	return {
		sub: 'jdoe', // The subject / user name
		"https://api.company.com/claims/roles": [
			'user'
		]
	}
}

gulp.task('default', function () {
	connect.server({
		root: ".",
		port: 9000,
		middleware: function (connect, opt) {
			return [
				mock.setAuthorization(secret, buildClaims),
				mock.proxyApi(baseUrl)
			];
		}
	});
});
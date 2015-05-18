Monarch Mock Gateway
====================

A Node.js-based gateway to that eliminates the need to run Monarch locally for API development.  The gateway proxies requests to your API that include mocked JWT tokens for authorization in the service driver.

### Setup

1.	Make sure your API is configured to accept JWT tokens for claims (e.g. If using Spring, set the `jwt.base64Key` property)
2.	Cut and paste this same Base64-encoded value into the `base64secret` variable in gulpfile.js
3.	Change the `baseUrl` variable if necessary to point to something other than http://localhost:8080
4.	Change the body of `buildClaims` to return the claims you want to test your API with
5.	Run `npm install`, then `gulp`
6.	Send API requests through http://localhost:9000
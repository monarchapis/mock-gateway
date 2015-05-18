Monarch Mock Gateway
====================

A Node.js-based gateway to that eliminates the need to run Monarch locally for API development.  The gateway proxies requests to your API that include mocked JWT tokens for authorization in the service driver.

### Setup

1	Make sure your APIs are configured to accept JWT tokens by setting the `jwt.base64Key` property (if using Spring)
2	Cut and paste this same Base64-encoded value into the `base64secret` variable in gulpfile.js
3	Change the `baseUrl` variable if necessary
4	Change the body of `buildClaims` to return the claims you want to test your API with
5	run `npm install`, then `gulp`
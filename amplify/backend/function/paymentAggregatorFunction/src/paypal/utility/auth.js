var { find, filter } = require('lodash')
var qs = require('qs');
var axios = require('axios').default

var AuthUtils = {

    getAccessToken: async (req) => {
        try {
            var clientID = req.client_id
            var clientSecret = req.client_secret
            var data = qs.stringify({
                'grant_type': 'client_credentials',
                'ignoreCache': 'true',
                'return_authn_schemes': 'true',
                'return_client_metadata': 'true',
                'return_unconsented_scopes': 'true'
            });
            var config = {
                method: 'post',
                url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                auth: {
                    username: clientID,
                    password: clientSecret
                },
                data: data
            };
            let response = await axios(config)
            return response.data;
        } catch (error) {
            console.error(error);
            throw error
        }
    },
    validateCredentials: async (req) => {
        try {
            let result = AuthUtils.getAccessToken(req)
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: {
                    result,
                    req
                },
            };
        } catch (error) {
            return {
                statusCode: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: {
                    error,
                    req
                },
            };
        }
    }


}

module.exports = AuthUtils
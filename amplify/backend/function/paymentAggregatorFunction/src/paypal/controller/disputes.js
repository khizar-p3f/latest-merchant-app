const AuthUtils = require("../utility/auth");
var axios = require('axios').default;
const disputesController = {

    getAllDisputes: async (event) => {
        try {
            let token = await AuthUtils.getAccessToken(event);
            var config = {
                method: 'get',
                url: 'https://api-m.sandbox.paypal.com/v1/customer/disputes',
                headers: {
                    'Authorization': `Bearer ${token.access_token}`
                }
            };
            let response = await axios(config)
            let result = {
                data: response.data
            }
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: {
                    result,
                    event
                },
            };
        } catch (error) {
            console.error(error.message);
            return {
                statusCode: 500,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: {
                    error,
                    event
                },
            };
        }
    }
}
module.exports = disputesController;
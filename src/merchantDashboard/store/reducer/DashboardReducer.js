const moment = require('moment-timezone');
moment.tz.setDefault('America/Los_Angeles');

let userState = {
    payments: {
        loading: true,
        data: []
    },
    loading: true
}

export default function (state = userState, action) {

    if (action.type === 'UPDATE_PAYMENTS') {
        let data = action.payload;
        state = {
            payments: {
                loading: false,
                data
            },
            ...state,
        }
    }   
    return state
}

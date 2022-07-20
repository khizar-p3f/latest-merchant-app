const moment = require('moment-timezone');
moment.tz.setDefault('America/Los_Angeles');

let userState = {
    countryChart: {
        loading: true,
        details: []
    },
    loading: true
}

export default function (state = userState, action) {
    if (action.type === 'UPDATE_DASHBOARD_DATA') {
        let data = action.payload;
        let { date, endDate, intent, country, language, sortby} = action;
        return {
            ...state,
            [`${date}-${endDate}-${intent}-${country}-${language}-${sortby}`]: {
                data,
                loading: false
            },
        }
    }
    if (action.type === 'RESET_DASHBOARD_DATA') {
        return {
            countryChart: {
                loading: true,
                details: []
            },
            loading: true
        }
    }

    if (action.type === 'GET_DASHBOARD_DATA') {
        let date = action.payload.date;
        let sortby = action.payload.sortby;
        return {
            ...state,
            ...(state[`${date}-${sortby}`]), 
            loading: false
        }
    }

    // if (action.type === 'UPDATE_DASHBOARD_COUNTRY') {
    //     let data = action.payload;
    //     let { date, country, language, sortby} = action;
    //     return {
    //         ...state,
    //         countryChart: {
    //             ...state.countryChart,
    //             [`${date}-${country}-${language}-${sortby}`]: {
    //                 data,
    //                 loading: false,
    //             },
    //         }
    //     }
    // }

    return state;
}

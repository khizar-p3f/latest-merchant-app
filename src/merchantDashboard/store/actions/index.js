import axios from 'axios';
import moment from 'moment-timezone'
moment.tz.setDefault('America/Los_Angeles');

/**
 * Axios Intercepter
 * To Avoid Dublicates Service call 
 * @param {*} state 
 * @returns 
 */
let pending = [];
let cancelToken = axios.CancelToken;
let removePending = ever => {
  for (let p in pending) {
    if (pending[p].u === ever.url + '&' + ever.method) {
      pending[p].f();
      pending.splice(p, 1);
    }
  }
};
axios.interceptors.request.use(
  config => {
    config.cancelToken = new cancelToken(c => {
      if (pending.findIndex(val => val.u == config.url + '&' + config.method) != -1) {
        c();
      } else {
        pending.push({ u: config.url + '&' + config.method, f: c });
      }
    });
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  res => {
    removePending(res.config);
    return res;
  },
  error => {
    removePending(error.config);
    if (axios.isCancel(error)) {
      console.log('Canceled repeated request');
    } else {
      console.error(error.response);
    }
    return Promise.reject(error);
  }
);



/**
 * GET
 * User detail 
 */
export const updateUser = async (user) => {
  //let response = await axios.get('/api/user/')

  return {
    type: 'GET_USERS',
    payload: {...user}
  };
}
export const updatePayments =(payments)=> {
  //let response = await axios.get('/api/user/')

  return {
    type: 'UPDATE_PAYMENTS',
    payload: payments
  };
}

export const getUsersList = async () => {
  let response = await axios.get('/api/user/getUsersList')

  return {
    type: 'GET_USERS',
    payload: response.data.result.records
  };
}


/**
 * GET
 * CI Dashboard 
 */
export const getDate = async (date) => {
  return {
    type: 'SET_DATE',
    payload: { date: date }
  };
}


export const getDashboard = async (date, endDate, sortby, intent=[], country=[], language=[]) => {
  let response = await axios.get(`/contacts/api/customerIntents/getDashboardData?startDate=${date}&endDate=${endDate}&sortby=${sortby}&intent=${intent}&country=${country}&language=${language}&newCustomerIntent=true`)
  if(response.error) {
    throw new Error(response.error);
  }
  return {
    type: 'UPDATE_DASHBOARD_DATA',
    sortby,
    intent,
    country, 
    language,
    date, endDate, payload: response.data.result
  };
}
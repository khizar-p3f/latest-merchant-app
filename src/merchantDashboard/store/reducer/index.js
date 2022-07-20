
import { combineReducers } from "redux";

import userReducer from './userReducer.js'
import DashboardReducer from './DashboardReducer'


const rootReducer = combineReducers({
    user: userReducer,
    dashboard: DashboardReducer,

});

export default rootReducer;
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
//import LandingPageMain from "./landing";
//import MerchantDashboard from './maindashboard'
//import { Amplify } from 'aws-amplify';
//import awsExports from './aws-exports';
import reportWebVitals from "./reportWebVitals";

import { store } from './store'
import { Provider } from 'react-redux'
import NewDashboard from "./newDashboard";

//Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Router basepath="/">
        <NewDashboard   path="/*" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
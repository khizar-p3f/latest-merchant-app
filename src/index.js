import React from "react";
import ReactDOM from "react-dom";

import { Router } from "@reach/router";
import { store } from './store'
import { Provider } from 'react-redux'
import reportWebVitals from "./gc-components/reportWebVitals";
import DefaultErrorBoundary from "./gc-components/errorBoundary";
import { Amplify } from 'aws-amplify';

import awsExports from './aws-exports';
import SigninPage from "./landing/signin";
import DashboardIndexPage from "./dashboard";
Amplify.configure(awsExports);




ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Provider store={store}>
        <Router basepath="/">
          <DashboardIndexPage path="/*" />            
          <SigninPage path="/signin/*" />        
        </Router>
      </Provider>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
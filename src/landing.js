import React, { Suspense } from "react";
const Indexpage = React.lazy(() => import("./landingpage"));
import { Router } from "@reach/router";
import Fallback from "./fallback";
import "antd/dist/antd.less";
import LandingSignupPage from "./landingpage/pages/login-signup";
//import { createStore, applyMiddleware, compose } from "redux";
//import promise from "redux-promise";
//import { Provider } from "react-redux";
//import reducers from "./merchantDashboard/store/reducer";
/* const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : compose;
const store = createStore(
    reducers,
    compose(applyMiddleware(promise), composeEnhancers)
); */

const LandingPageMain = () => {
    return (
        <main className="main-container">
            <Suspense fallback={<Fallback />}>
                <Router basepath="/">
                    <Indexpage path="/*" />
                    <LandingSignupPage path="/signin" />
                    <LandingSignupPage path="/signup" />
                </Router>
            </Suspense>
        </main>
    );
};
export default LandingPageMain;

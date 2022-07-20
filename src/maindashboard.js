import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./merchantDashboard/index'));
import Fallback from './fallback';
//import { createStore, applyMiddleware, compose } from 'redux';
//import promise from 'redux-promise';
//import { Provider } from 'react-redux';
//import reducers from './merchantDashboard/store/reducer'
//const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
//const store = createStore(reducers, compose(applyMiddleware(promise), composeEnhancers))

const MainDashboard = () => {
    return (
        <main className='main-container'>
            <Suspense fallback={<Fallback />}>
                <Dashboard />
            </Suspense>
        </main>
    )
}
export default MainDashboard


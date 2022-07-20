import {  Layout,   } from 'antd';
import React, { useState } from 'react';
import MainHeader from './components/mainheader';
import MainSidebar from './components/mainsidebar';
import { Router } from '@reach/router'
import AboutPage from './pages/about';
import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less';
import './theme/app.less'
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './pages/users'; 

 

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout id='main-layout'>
            <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout id='main-layout'>
                <MainSidebar collapsed={collapsed} />
                <Layout className="site-layout">
                    <Router basepath="/app">
                        <UsersList path="/" />
                        <UsersList path="/home"  />
                        <UsersList path="/users"  />
                        <AboutPage path="/about-us" />
                    </Router>                   
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App

import React, { useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { navigate, Router } from '@reach/router';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { MerchantsProfile } from '../models/';
import { updateProfile, updateUser } from '../store/reducers/user';
import { Layout } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';
import DashboardHeader from './components/header';
import DashboardSidebar from './components/sidebar';

import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import './assets/style/theme.less';
import Fallback from '../gc-components/fallback';

const BlankPage = React.lazy(() => import('./pages/blank'));
const CreateUserProfile = React.lazy(() => import('./pages/createProfile'));
const { Content } = Layout;


const DashboardIndexPage = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        collapsed: false
    })
    useEffect(() => {
        const checkUserProfile = async (id) => {
            let result = await DataStore.query(MerchantsProfile, (profile) => profile.email('eq', id));
            return result
        }
        Auth.currentAuthenticatedUser().then((login) => {
            const loginData = login?.attributes
            dispatch(updateUser({ ...loginData }))
            checkUserProfile(loginData.email).then((result) => {
                if (result.length > 0) {
                    let userProfile = result[0]
                    dispatch(updateProfile({ ...userProfile }))
                }else{
                    navigate("/new-user")
                }
            })
        }).catch((ex) => {
            navigate("/signin")
        })
    }, [state.user])

    return (
        <Layout className='newdashboard'>
            <React.Suspense fallback={<Fallback />}>
                <DashboardHeader />
                <Layout>
                    <DashboardSidebar />
                    <Content className='main-content'>
                        <section className='notification'><SimpleLineIcon name="layers" /> Hi Guest, this is the notification area</section>
                        <Router basepath="/">
                            <BlankPage path="/" />
                            <CreateUserProfile path="/new-user" />
                        </Router>
                    </Content>
                </Layout>
            </React.Suspense>
        </Layout>
    )
}

export default DashboardIndexPage
import React from 'react'
import SimpleLineIcon from 'react-simple-line-icons';
import {  Layout, Menu,  } from 'antd';
const { Header } = Layout;
import logo from '../assets/images/logo-2.png'
import { navigate } from '@reach/router';

const LandingPageHeader = () => {
    return (
        <Header >
            <div className='container'>
                <div className="logo" ><img src={logo} height={50} /></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home" onClick={()=>navigate('/')} > <SimpleLineIcon name="home" /> Home</Menu.Item>
                    <Menu.Item key="about" onClick={()=>navigate('/')} > <SimpleLineIcon name="speech" /> About us</Menu.Item>
                    <Menu.Item key="features" onClick={()=>navigate('/')} > <SimpleLineIcon name="magic-wand" /> Features</Menu.Item>
                    <Menu.Item key="demo" onClick={()=>navigate('/')} > <SimpleLineIcon name="control-play" /> Demo</Menu.Item>
                    <Menu.Item key="login" onClick={()=>navigate('/signup')} > <SimpleLineIcon name="user" /> Signup / Login</Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}

export default LandingPageHeader
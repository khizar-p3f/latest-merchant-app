import { Divider, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import SimpleLineIcon from 'react-simple-line-icons';

const { Sider } = Layout;
const DashboardSidebar = () => {
    const [state, setState] = useState({
        collapsed: false
    })
    return (
        <Sider theme='light' width={250} collapsedWidth={80} collapsed={state.collapsed} breakpoint="lg" reverseArrow >
            <p onClick={() => setState({ ...state, collapsed: !state.collapsed })} className='nav'>
                <SimpleLineIcon name="menu" /> {!state.collapsed && <span>Navigations</span>}</p>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['home']}>
                <Menu.Item> <SimpleLineIcon name="home" /> item 1</Menu.Item>
                <Menu.Item> <SimpleLineIcon name="target" />   item 2</Menu.Item>
            </Menu>
            <Divider />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['about']}>
                <Menu.Item key="home"><SimpleLineIcon name="home" /> Home</Menu.Item>
                <Menu.Item key="dashboard"><SimpleLineIcon name="briefcase" /> Dashboard</Menu.Item>
                <Menu.Item key="abouts"><SimpleLineIcon name="layers" /> About us</Menu.Item>
                <Menu.Item key="Pricing"><SimpleLineIcon name="speedometer" /> Pricing</Menu.Item>
                <Menu.Item key="Contact"><SimpleLineIcon name="phone" /> Contact us</Menu.Item>
            </Menu>

        </Sider>
    )
}

export default DashboardSidebar
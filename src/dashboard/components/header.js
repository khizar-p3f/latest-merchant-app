import React, { useState, useEffect } from 'react';
import { Avatar, Col, Input, Layout, Menu, Row } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';
import { useSelector } from 'react-redux';

const { Header } = Layout;
const DashboardHeader = () => {
    const [state, setState] = useState({ user: null })
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.isLoggedin) {
            setState({ user: user.name })
        }
    }, [user])


    return (

        <Header color='#fc6'>
            <Row align='top' justify='space-between'>
                <Col span={4}>
                    <div className="logo" >
                        {/* <img src={logo} width={150} /> */}
                        <span style={{ color: '#6672ff' }}><SimpleLineIcon name="organization" /> Fusion</span><span style={{ color: '#d966ff' }}>Disputes</span>
                    </div>
                </Col>
                <Col span={4}>
                    <Input.Search style={{ marginTop: 12 }} placeholder="Search" allowClear={true} size="large" />
                </Col>
                <Col span={4} offset={12}>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['dashboard']}>
                       {/*  <Menu.Item key="home"><SimpleLineIcon name="home" /> Home</Menu.Item>
                        <Menu.Item key="dashboard"><SimpleLineIcon name="briefcase" /> Dashboard</Menu.Item>
                        <Menu.Item key="abouts"><SimpleLineIcon name="layers" /> About us</Menu.Item>
                        <Menu.Item key="Pricing"><SimpleLineIcon name="speedometer" /> Pricing</Menu.Item>
                        <Menu.Item key="Contact"><SimpleLineIcon name="phone" /> Contact us</Menu.Item> */}

                        <Menu.Item key="about" icon={<Avatar size={40} src="https://joeschmoe.io/api/v1/random" />}>{state.user}</Menu.Item>
                       {/*  <Menu.Item key="notification"><SimpleLineIcon name="settings" /></Menu.Item> */}
                    </Menu>

                </Col>
            </Row>
        </Header>
    )
}

export default DashboardHeader
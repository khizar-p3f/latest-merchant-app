import { Layout, Row, Col, Space, Button, Avatar, Divider, Tooltip } from 'antd'
import React from 'react'

import logo from '../assets/images/logo-2.png'
import MenuIcon from '../assets/images/menu.svg'
import logoSmall from '../assets/images/logo-small-2.png'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';


const { Header } = Layout;
const MainHeader = (props) => {
    return (
        <Header className='main-header'>
            <Row justify='space-evenly' align='top'>
                <Col span={4}>
                    <Space>
                        <Button type='text' onClick={() => props.setCollapsed(!props.collapsed)} icon={<img className='menu-icon' src={MenuIcon} height={35} />} />
                        <div className='small-logo'>
                            <img src={props.collapsed ? logoSmall : logo} height={props.collapsed ? 30 : 50} />
                        </div>
                    </Space>
                </Col>
                <Col span={18}></Col>
                <Col span={2} style={{textAlign:'right'}}   >
                    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>                      
                        <Avatar size={50} style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    </Avatar.Group>
                </Col>
                
            </Row>
        </Header>
    )
}

export default MainHeader
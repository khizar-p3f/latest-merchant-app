import React, { useState } from 'react'
import 'antd/lib/style/themes/default.less';
import 'antd/dist/antd.less';
import './assets/style/theme.less'
import { PageHeader, Layout, Menu, Avatar, Divider, Row, Col, Card, Input, Progress, Space } from 'antd';
import logo from './assets/images/logo.png'
const { Header, Content, Footer, Sider } = Layout;
import SimpleLineIcon from 'react-simple-line-icons';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAddressBook, faHome, faBars, faShop, faAnchor, faProjectDiagram, faDashboard, faInfoCircle, faArrowAltCircleLeft, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import TasksWidget from './component/tasks';


const NewDashboard = () => {
    const [state, setState] = useState({ collapsed: false })
    return (
        <Layout className='newdashboard'>
            <Header color='#fc6'>
                <Row align='top' justify='space-between'>
                    <Col span={4}>
                        <div className="logo" >
                            {/* <img src={logo} width={150} /> */}
                            <span style={{ color: '#6672ff' }}><SimpleLineIcon  name="organization" /> Fusion</span><span style={{ color: '#d966ff' }}>Disputes</span> 
                        </div>
                    </Col>
                    <Col span={4}>
                        <Input.Search style={{ marginTop: 12 }} placeholder="Search" allowClear={true} size="large" />
                    </Col>
                    <Col span={12} offset={4}>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['dashboard']}>
                            <Menu.Item key="home"><SimpleLineIcon name="home" /> Home</Menu.Item>
                            <Menu.Item key="dashboard"><SimpleLineIcon name="briefcase" /> Dashboard</Menu.Item>
                            <Menu.Item key="abouts"><SimpleLineIcon name="layers" /> About us</Menu.Item>
                            <Menu.Item key="Pricing"><SimpleLineIcon name="speedometer" /> Pricing</Menu.Item>
                            <Menu.Item key="Contact"><SimpleLineIcon name="phone" /> Contact us</Menu.Item>

                            <Menu.Item key="about" icon={<Avatar size={40} src="https://joeschmoe.io/api/v1/random" />}>Khizar Ahmed</Menu.Item>
                            <Menu.Item key="notification"><SimpleLineIcon name="settings" /></Menu.Item>
                        </Menu>

                    </Col>
                </Row>
            </Header>
            <Layout>
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
                <Content className='main-content'>
                    <section className='notification'><SimpleLineIcon name="layers" /> Hi Guest, this is the notification area</section>
                    <section className='content'>
                        <PageHeader title="Welcome Khizar" avatar={<SimpleLineIcon name="user" />} backname={<SimpleLineIcon name="arrow-left-circle" />} ghost={false} className='boxshadow' />

                        <Row align='stretch' justify='start' gutter={[16, 16]} style={{ marginTop: 20 }}>
                            <Col span={6}>
                                <Card title="Transactions" extra={<SimpleLineIcon name="settings" />} className='boxshadow border-radius'>
                                    <Row>
                                        <Col span={8}>
                                            <h2>25</h2>
                                            <p>Completed</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>15</h2>
                                            <p>Pending</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>3</h2>
                                            <p>Cancelled</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Disputes" className='boxshadow border-radius' extra={<SimpleLineIcon name="settings" />}>
                                    <Row>
                                        <Col span={8}>
                                            <h2>25</h2>
                                            <p>Completed</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>15</h2>
                                            <p>Pending</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>3</h2>
                                            <p>Cancelled</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Customer Engagement" className='boxshadow border-radius' extra={<SimpleLineIcon name="settings" />}>
                                    <Row>
                                        <Col span={8}>
                                            <h2>25</h2>
                                            <p>Happy</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>15</h2>
                                            <p>Frustrated</p>
                                        </Col>
                                        <Col span={8}>
                                            <h2>3</h2>
                                            <p>Sufferer</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: 20 }} gutter={[16, 16]} align='stretch'>
                            <Col span={12}>
                                <Card title={<div> <SimpleLineIcon name="notebook" /> Messages from customer</div>} className='boxshadow border-radius'>
                                    <TasksWidget />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card className='boxshadow border-radius'>
                                    <Space>
                                        <Progress type="circle" percent={30} width={80} />
                                        <Progress type="circle" percent={70} width={80} status="exception" />
                                        <Progress type="circle" percent={100} width={80} />
                                    </Space>
                                </Card>
                                <Card className='boxshadow border-radius'>
                                <Space>
                                    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                                    <Progress type="circle" percent={100} format={() => 'Done'} />
                                    </Space>
                                </Card>
                                <Card className='boxshadow border-radius'>
                                <Space>
                                    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                                    <Progress type="circle" percent={100} format={() => 'Done'} />
                                    </Space>
                                </Card>
                            </Col>
                        </Row>
                    </section>
                </Content>
            </Layout>

        </Layout>
    )
}

export default NewDashboard
import React from 'react'
import SimpleLineIcon from 'react-simple-line-icons';
import { Button, Card, Col, Layout, Row, Space } from 'antd';
const { Content, Footer } = Layout;
import './theme/index.less'
import HomePageBanner from './component/homeBanners';
import img1 from './assets/images/svg10.svg'
import img2 from './assets/images/svg11.svg'
import LandingPageHeader from './component/header';
import { navigate } from '@reach/router';

const { Meta } = Card;

const LandingIndexPage = () => {

    //style={{ padding: '0 50px' }}
    return (
        <Layout className="layout">
            <LandingPageHeader />
            
            <section className='home-page'>
                <Content >
                    <div className='banner'><HomePageBanner /></div>
                    <div className='sub-banner'>
                        <div className='container'>
                            <Row align='middle' justify='center'>
                                <Col span={6}>
                                    <img src={img1} height={100} />
                                </Col>
                                <Col span={18}>
                                    <h2>Time for the traditional post to outline what happened the past year and the goals for the next one. </h2>
                                    <Space style={{ marginTop: 10 }}>
                                        <Button onClick={()=>navigate('/signup')} size='large' type='primary' ><SimpleLineIcon name="user" /> Signup</Button>
                                        <Button onClick={()=>navigate('/signup')} size='large' type='dashed' ><SimpleLineIcon name="user-following" /> Login</Button>

                                    </Space>

                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='features'>
                        <div className='container'>
                            <Row>
                                <Col span={24}>
                                    <h1>Features</h1>
                                    <h2>New Merchant App One stop shop for all payments solutions Since launching this collection, a few months ago, the use cases for Handcrafts are now more clear. So it's time to add new ones</h2>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                                <Col span={6} >
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />

                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card actions={[<SimpleLineIcon name="basket" />]} hoverable cover={<img alt="example" height={100} src={img2} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Content>
            </section>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                P3Fusion LLC 2022
            </Footer>
        </Layout>
    )
}

export default LandingIndexPage

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Card, Typography, Form, Input, Row, Col, Divider, Button, Space, notification, Tabs, Result } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';
import { DataStore } from '@aws-amplify/datastore';
import { updateProfile } from '../../store/reducers/user';
import { useDispatch } from 'react-redux';
import { MerchantsProfile } from '../../models';
import { navigate } from '@reach/router';
import '../assets/style/aggregators.less'


const { Title } = Typography
const { TabPane } = Tabs;

const SaveAggregators = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const user = useSelector((state) => state.user)
    const initialState = {
        selected: [],
        aggreGators: [
            {
                name: "PayPal",
                logo: "https://1.bp.blogspot.com/-ro2dP_igRy4/YCAQM0M3GlI/AAAAAAAAJVg/Hz6jyEIBHzMqj3Hlsg9j6eE18Cz_24nQACLcBGAsYHQ/w400-h155/paypal-logo.png"
            },
            {
                name: "Square",
                logo: "https://modernheating.com/wp-content/uploads/2022/02/square-300x75.png"
            },
            {
                name: "Klarna",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Klarna_Logo_black.svg/768px-Klarna_Logo_black.svg.png"
            },
            {
                name: "Stripe",
                logo: "https://events-export.businessfrance.fr/fintech-tour-north-america/wp-content/uploads/sites/828/1280px-Stripe_Logo_revised_2016.svg_.png"
            },
        ]
    }

    const [state, setState] = useState({ ...initialState })

    const ChooseAggeregator = (aggregator) => {
        let { selected } = state
        let checkExist = selected.indexOf(aggregator)
        if (checkExist > -1) {
            selected.splice(checkExist, 1);
        } else {
            selected.push(aggregator)
        }
        setState({ ...state, selected })
    }

    const getLogo = (agg) => {
        const selected = state.aggreGators.filter((e) => e.name === agg)
        return selected[0].logo
    }

    useEffect(() => { }, [])

    const onFinish = (e) => {
        const profileData = {
            auth_id: user.authID,
            company: e.company,
            email: e.email,
            name: e.name
        }
        const newUserProfile = new MerchantsProfile(profileData)
        DataStore.save(newUserProfile).then((insid) => {
            dispatch(updateProfile({ ...profileData, id: insid.id }))
            notification.success({
                message: `Records Added for the user: ${insid.id}`
            })
        }).catch((ex) => {
            notification.error({
                message: ex.message
            })
        })
        navigate("/dashboard")
    }

    return (
        <section className='content aggregator'>
            <Row>
                <Col span={24}>
                    <Card bordered>
                        <Title level={3} >Hi {user.name}, Please choose payments gateway's</Title>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 24 }}>
                <Col span={24}>
                    {/*  <Typography.Title level={5}>Please choose payments gateway's</Typography.Title> */}

                    <section className='aggreGators-grid'>
                        {
                            state.aggreGators.map((agg) =>
                                <div key={agg.name} className="items"  >
                                    <img src={agg.logo} height={50} />
                                    <div className={state.selected.indexOf(agg.name) > -1 ? "button selected" : "button"} >
                                        <Button onClick={() => ChooseAggeregator(agg.name)} block type='default' size='large' ><SimpleLineIcon name="check" size="large" /></Button>
                                    </div>
                                </div>
                            )
                        }
                    </section>

                </Col>
            </Row>
            {
                state.selected.length > 0 ? 
                <Row style={{ marginTop: 50 }}>
                    <Col span={24}>

                        <Card bordered className='bordered box-shadow'>
                            <Tabs>
                                {state.selected.map((agg) =>
                                    <TabPane tab={<span><img height={50} src={getLogo(agg)} /></span>} key={agg}>
                                        <Typography.Title level={5}>Please add <u><em>{agg}</em></u> Details to proceed further</Typography.Title>
                                        <Typography.Paragraph  > Please be ensured that your credential informations are stored securly   </Typography.Paragraph>
                                        <Form layout="vertical" size="large" >
                                            <Form.Item name="secret_id" label={`${agg} Secret ID`} required tooltip="This is a required field">
                                                <Input placeholder="secret id" />
                                            </Form.Item>
                                            <Form.Item name="secret_key"  label={`${agg} Secret Key`} required tooltip="This is a required field">
                                                <Input placeholder="secret key" />
                                            </Form.Item>
                                           
                                            <Divider />
                                            <Form.Item>
                                                <Space>
                                                    <Button type="primary" size='large' htmlType='submit'><SimpleLineIcon name="user" /> Validate</Button>
                                                    <Button type="default" size='large' htmlType='reset'><SimpleLineIcon name="refresh" /> Reset</Button>
                                                </Space>
                                            </Form.Item>
                                        </Form>                                    
                                    </TabPane>
                                )}

                        </Tabs>
                    </Card>

                </Col>

                </Row>
                :
                <Row style={{ marginTop: 50 }}>
                    <Col span={24}>
                        <Result title="Please choose any 1 Payment gateway to proceed further" status='404' />
                    </Col>
                </Row>
            }
        </section >
    )

}

export default SaveAggregators
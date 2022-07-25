
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Card, Typography, Form, Input, Row, Col, Divider, Button, Space, notification } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';
import { DataStore } from '@aws-amplify/datastore';
import { updateProfile } from '../../store/reducers/user';
import { useDispatch } from 'react-redux';
import { MerchantsProfile } from '../../models/';
import { navigate } from '@reach/router';

const { Title } = Typography

const CreateUserProfile = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.isLoggedin) {
            form.setFieldsValue({ ...user })
        }
    }, [user])


    const onFinish = (e) => {
        const profileData = {            
            auth_id: user.authID,
            company: e.company,
            email: e.email,
            name: e.name
        }
        const newUserProfile = new MerchantsProfile()
        DataStore.save(newUserProfile).then((insid) => {
            dispatch(updateProfile({ ...profileData,id:insid.id}))
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
        <section className='content'>
            <Row>
                <Col span={24}>
                    <Card bordered>
                        <Title level={3} >Hi {user.name}, Please update the below form to setup your account</Title>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 24 }}>
                <Col span={8} offset={6}>
                    <Card bordered className='boxshadow border-radius'>
                        <Form form={form} layout="vertical" size="large" onFinish={onFinish}>
                            <Form.Item name="name" label="Your Full Name" required tooltip="This is a required field">
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item name="company" label="Your Company Name" required tooltip="This is a required field">
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item name="email" label="E-mail" required tooltip="This is a required field">
                                <Input placeholder="E-mail" />
                            </Form.Item>
                            <Divider />
                            <Form.Item>
                                <Space>
                                    <Button type="primary" size='large' htmlType='submit'><SimpleLineIcon name="user" /> Create Account</Button>
                                    <Button type="default" size='large' htmlType='reset'><SimpleLineIcon name="refresh" /> Reset</Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </section>
    )

}

export default CreateUserProfile
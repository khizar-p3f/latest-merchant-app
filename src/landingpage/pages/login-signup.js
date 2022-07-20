import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Button, Form, Input, Space, Alert, notification } from "antd";

import "../theme/index.less";
import img2 from "../assets/images/svg8.svg";
import LandingPageHeader from "../component/header";
import SimpleLineIcon from "react-simple-line-icons";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { updateUser } from "../../store/reducers/user";
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../mutations';
import { DataStore } from '@aws-amplify/datastore';
import { Merchants } from '../../models/';

const { Content, Footer } = Layout;
const LandingSignupPage = () => {
    const dispatch = useDispatch()
    const initialState = {
        page: 0,
        user: null,
        loginData: {},
        loginError: null,
        signupError: null,
        loginForm: {
            email: null,
            password: null,
        },
        signupForm: {
            username: null,
            phone_number: null,
            email: null,
            password: null,
            name: null,
            company: null,
            city: null,
            state: null,
            country: null,
        },
    };
    const [state, setState] = useState({
        ...initialState,
    });

    useEffect(() => { }, [])

    return (
        <Layout className="layout">
            <LandingPageHeader />
            <section className="signup">
                <Content>
                    <div className="container">
                        <Row align="middle" gutter={[16, 16]}>
                            <Col span={12}>
                                <img src={img2} height={500} />
                            </Col>
                            <Col span={12}>
                                <div className="form-box">
                                    {state.page == 0 ? <LoginSection state={state} setState={setState} /> : <SignupSection state={state} setState={setState} />}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </section>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                P3Fusion LLC 2022
            </Footer>
        </Layout>
    );
};

export default LandingSignupPage;

const SignupSection = (props) => {
    const dispatch = useDispatch()
    const { state, setState } = props
    const signUp = () => {
        try {
            const { signupForm } = state
            Auth.signUp({
                username: signupForm.username,
                email: signupForm.email,
                password: signupForm.password,
                attributes: {
                    name: signupForm.name,
                    email: signupForm.email,
                    phone_number: signupForm.phone_number,
                }
            }).then((res) => {
                notification.success({
                    message: `Signup Success ID: ${res.userSub}`
                })
                const newMerchantData = new Merchants({
                    usearname: signupForm.username,
                    email: signupForm.email,
                    city: signupForm.city,
                    company: signupForm.company,
                    country: signupForm.country,
                    merchant_id: res.UserSub,
                    name: signupForm.name,
                    state: signupForm.state,
                    established: "2022"
                })
                console.log({ newMerchantData });
                DataStore.save(insertData).then((insid) => {
                    notification.success({
                        message: `Records Added for the user: ${insid.id}`
                    })
                })
                /*  API.graphql(graphqlOperation(mutations.createMerchants,{
                     input: {
                         username: signupForm.username,
                         email: signupForm.email,
                         city: signupForm.city, 
                         company:signupForm.company, 
                         country: signupForm.country, 
                         merchant_id: res.UserSub, 
                         id:res.UserSub, 
                         name: signupForm.name, 
                         state: signupForm.state  
                     }
                 })); */ // equivalent to above example

                dispatch(updateUser({
                    id: res?.username,
                    name: res?.challengeParam?.userAttributes?.name,
                    email: res?.challengeParam?.userAttributes?.email,
                }))
            })
                .catch((ex) => {
                    console.error({ ex });
                    setState({ ...state, signupError: ex.message });
                });
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    return (
        <section>

            <h1>Sigin Up</h1>
            <h2>Already have an account <a onClick={() => setState({ ...state, page: 0 })}>Signin</a>  </h2>
            <p>
                Here's my recent exploration. What do you think? Give your
                opinion in the comments below!
            </p>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Form name="basic" layout="vertical" initialValues={{ remember: true }}>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, name: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, email: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, username: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!", },]} >
                            <Input.Password onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, password: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="phone" name="phone" rules={[{ required: true, message: "Please input your phone!", },]} >
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, phone_number: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="Company" name="company" rules={[{ required: true, message: "Please input your Company!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, company: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="city" name="city" rules={[{ required: true, message: "Please input your city!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, city: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="state" name="state" rules={[{ required: true, message: "Please input your state!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, state: e.target.value, }, })} />
                        </Form.Item>
                        <Form.Item label="country" name="country" rules={[{ required: true, message: "Please input your country!", },]}>
                            <Input onChange={(e) => setState({ ...state, signupForm: { ...state.signupForm, country: e.target.value, }, })} />
                        </Form.Item>
                        {state.signupError && <Col span={24}><Alert type="error" banner message={state.signupError} /></Col>}
                        <Form.Item wrapperCol={{ span: 24, }} >
                            <Space>
                                <Button onClick={() => signUp()} type="primary" htmlType="submit" size="large" >Login</Button>
                                <Button type="dashed" htmlType="reset" size="large" >Reset</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>


                <Col span={12}>
                    <Button
                        color="red"
                        type="primary"
                        size="large"
                        block
                        onClick={() =>
                            Auth.federatedSignIn({
                                provider: CognitoHostedUIIdentityProvider.Google,
                            })
                        }
                    >
                        <SimpleLineIcon name="social-google" /> Google{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" size="large" block>
                        <SimpleLineIcon name="social-twitter" /> twitter{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button color="red" type="primary" size="large" block>
                        <SimpleLineIcon name="social-instagram" /> instagram{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" size="large" block>
                        <SimpleLineIcon name="social-linkedin" /> linkedin{" "}
                    </Button>
                </Col>
            </Row>
        </section>
    )
}

const LoginSection = (props) => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { state, setState } = props
    useEffect(() => {
        console.log({ user });
        API.get('api5a64ad36', '/integrations', {
            'queryStringParameters': {
                'order': 'byPrice'
            }
        }).then((res)=>{
            console.log({res:res});
        });
    }, [user])
    const Login = () => {
        Auth.signIn(state.loginForm.email, state.loginForm.password)
            .then((res) => {
                setState({ ...state, loginData: res });
                dispatch(updateUser({
                    id: res.username,
                    name: res?.challengeParam?.userAttributes?.name,
                    email: res?.challengeParam?.userAttributes?.email,
                }))
                //navigate("app/users");
            })
            .catch((ex) => {
                console.error({ ex });
                setState({ ...state, loginData: {}, loginError: ex.message });
            });
    };
    return (
        <section>
            <h1>Sigin in</h1>
            <h2>Welcome Back <span style={{ backgroundColor: '#fc6' }}>Dont have an account</span>  <a onClick={() => setState({ ...state, page: 1 })}>Signup</a>  </h2>
            <p>
                Here's my recent exploration. What do you think? Give your
                opinion in the comments below!
            </p>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        loginForm: {
                                            ...state.loginForm,
                                            email: e.target.value,
                                        },
                                    })
                                }
                            />
                        </Form.Item>

                        <Form.Item

                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password onChange={(e) =>
                                setState({
                                    ...state,
                                    loginForm: {
                                        ...state.loginForm,
                                        password: e.target.value,
                                    },
                                })
                            } />
                        </Form.Item>

                        {state.loginError && <Col span={24}><Alert type="error" banner message={state.loginError} /></Col>}
                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Space>
                                <Button
                                    onClick={() => Login()}
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                >
                                    Login
                                </Button>
                                <Button
                                    type="dashed"
                                    htmlType="reset"
                                    size="large"
                                >
                                    Reset
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>


                <Col span={12}>
                    <Button
                        color="red"
                        type="primary"
                        size="large"
                        block
                        onClick={() =>
                            Auth.federatedSignIn({
                                provider: CognitoHostedUIIdentityProvider.Google,
                            })
                        }
                    >
                        <SimpleLineIcon name="social-google" /> Google{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" size="large" block>
                        <SimpleLineIcon name="social-twitter" /> twitter{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button color="red" type="primary" size="large" block>
                        <SimpleLineIcon name="social-instagram" /> instagram{" "}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button type="primary" size="large" block>
                        <SimpleLineIcon name="social-linkedin" /> linkedin{" "}
                    </Button>
                </Col>
            </Row>
        </section>
    )
}


const FetchMerchangts = () => {
    return new Promise((resolve, reject) => {
        try {
            API.graphql(graphqlOperation(listMerchants)).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                throw error
            })

        } catch (error) {
            console.error({ error });
            reject(error)
        }
    })
}
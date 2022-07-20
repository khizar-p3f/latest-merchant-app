import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePayments, updateUser } from '../store/actions';
import { UserOutlined, ArrowDownOutlined, ArrowUpOutlined, UserAddOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../assets/style/user.less'
import { NumberStringSort, sortDate, sortString } from '../lib/table';
import _ from 'lodash'
import { API, Auth, graphqlOperation } from "aws-amplify";
import {
    Layout, PageHeader, Space, Spin, Row, Col, Statistic, Card, Avatar, Skeleton, Button, Table,
    Dropdown, Menu, Input
} from 'antd';
import moment from 'moment-timezone';
import { DataStore } from '@aws-amplify/datastore';
import { Merchants } from '../../models/';

import { listMerchants } from '../../queries/listMerchants';
const { Content } = Layout
const { Search } = Input;

const fetchPaymentVendors = () => {
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

const UsersList = () => {
    const dispatch = useDispatch()
    const store = useSelector(store => store.merchants);
    const dashboard = useSelector(store => store.dashboard);
    const initialState = {
        isListLoaded: false
    }
    const [state, setState] = useState(initialState)



    useEffect(() => {
        fetchPaymentVendors().then((data) => {
            dispatch(updatePayments(data))
        }).catch((ex)=>{
            console.error({ex});
        })
    }, [])

    useEffect(() => {
        console.log({ dashboard });
    }, [dashboard])

    const routes = [
        {
            path: '',
            breadcrumbName: 'Home',
        },
        {
            path: 'users',
            breadcrumbName: 'Uers List',
        },
    ];
    const tableColumns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            ellipsis: true,
            filters: _(store.merchants.data).map('name').uniq().value().map((rec) => { return { text: rec, value: rec } }),
            onFilter: (value, record) => record.name.indexOf(value) === 0, defaultSortOrder: 'descend',
            sorter: (a, b) => sortString(a, b, 'name'),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Status',
            dataIndex: 'active',
            key: 'active',
            sorter: (a, b) => NumberStringSort(a, b, 'active'),
            sortDirections: ['descend', 'ascend'],
            render: (text, row, index) => <Space direction='vertical' align='center'>{<Avatar style={{ backgroundColor: text ? "green" : "red", verticalAlign: 'middle' }} shape='circle' size='large' icon={text ? <CheckCircleOutlined /> : <CloseCircleOutlined />} />}</Space>
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            ellipsis: true,
            filters: _(store.merchants.data).map('email').uniq().value().map((rec) => { return { text: rec, value: rec } }),
            onFilter: (value, record) => record.email.indexOf(value) === 0, defaultSortOrder: 'descend',
            sorter: (a, b) => sortString(a, b, 'email'),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Address',
            dataIndex: 'country',
            key: 'country',
            sorter: (a, b) => NumberStringSort(a, b, 'country'),
            sortDirections: ['descend', 'ascend'],
            render: (text, row, index) => <Space size='small' direction='vertical' align='start'>
                <p>{row.locality} {row.city}</p>
                <p>{row.state} {row.country} {row.zipcode}</p>
            </Space>
        },
        {
            title: 'Registered',
            dataIndex: 'signedup',
            key: 'signedup',

            filterResetToDefaultFilteredValue: true,
            sorter: (a, b) => sortDate(a, b, 'signedup'),
            sortDirections: ['descend', 'ascend'],
            render: (text, row, index) => <Space size='small' direction='vertical' align='start'>
                <p>{row.signedup ? moment(row.signedup).format("lll") : null}</p>

            </Space>
        },
    ]
    let tableData = store.usersList.data
    const [searchData, setsearchData] = useState(null);
    const onChange = (e) => { e.target.value == '' && setsearchData(tableData) }
    const onSearch = (val) => {
        let searchRec = tableData.filter(o =>
            Object.keys(o).some(k => String(o[k]).toLowerCase().includes(val.toLowerCase()))
        );
        setsearchData(val ? searchRec : tableData);
    }
    return (
        <Content className='user-list'>
            <PageHeader
                avatar={<UserOutlined />}
                ghost={false}
                className="site-page-header"
                title="Users Lists"
                breadcrumb={{ routes }}
                subTitle="List of available users"
                extra={<Dropdown overlay={<Menu
                    items={[
                        {
                            key: '1',
                            label: (
                                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                    1st menu item
                                </a>
                            ),
                        },
                        {
                            key: '2',
                            label: (
                                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                    2nd menu item
                                </a>
                            ),
                        },
                        {
                            key: '3',
                            label: (
                                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                    3rd menu item
                                </a>
                            ),
                        },
                    ]}
                />} arrow>

                    <Button type='ghost'><UserOutlined />Actions</Button>
                </Dropdown>}
            />
            <div className='stats'>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Space><Avatar icon={<UserOutlined />} /><ArrowUpOutlined /></Space>}
                                suffix="Users"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Space><Avatar icon={<UserOutlined />} /><ArrowDownOutlined /></Space>}
                                suffix="Users"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <section className='grid-section'>
                {
                    state.isListLoaded ?
                        <Card className='users-table-card' title="Users Lists"
                            extra={[
                                <Search placeholder="Search . . ."
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    size='middle'
                                    style={{ width: 280 }} enterButton allowClear />,
                                <Button type='primary' size='middle' icon={<UserAddOutlined />}>Add Users</Button>,
                            ]}
                        >
                            <Table
                                size='small' bordered showSorterTooltip
                                className='users-table'

                                dataSource={searchData == null ? store.usersList.data : searchData}
                                columns={tableColumns}
                                scroll={{ x: 800 }}
                                pagination={{
                                    showTotal: (total) => { return <p>Total Items :{total}</p> },
                                    showSizeChanger: true
                                }}
                            />
                        </Card>
                        :
                        <Card>
                            <Skeleton active round avatar paragraph={{ rows: 14, }} />
                        </Card>
                }
            </section>
        </Content>
    )
}





export default UsersList
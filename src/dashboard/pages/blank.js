import React from 'react';
import { Card, Col, Layout, PageHeader, Progress, Row, Space } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';

const BlankPage = () => {
    return (
        <section className='content'>
            <PageHeader title="Welcome Khizar" avatar={<SimpleLineIcon name="user" />} backname={<SimpleLineIcon name="arrow-left-circle" />} ghost={false} className='boxshadow' />
           
            <Row style={{ marginTop: 20 }} gutter={[16, 16]} align='stretch'>
                <Col span={24}>
                    <h2>Dashboard Blank Page</h2>
                </Col>
            </Row>
        </section>
    )
}

export default BlankPage
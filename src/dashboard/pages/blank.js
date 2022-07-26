import React, { useEffect } from 'react';
import { Card, Col, Layout, PageHeader, Progress, Row, Space } from 'antd';
import SimpleLineIcon from 'react-simple-line-icons';
import { useSelector } from 'react-redux';

const BlankPage = () => {
    const user=useSelector((store)=>store.user)

    useEffect(() => {

    }, [user.is])

    return (
        <section className='content'>
            {/* <PageHeader title="Welcome Khizar" avatar={<SimpleLineIcon name="user" />} backname={<SimpleLineIcon name="arrow-left-circle" />} ghost={false} className='boxshadow' />
            */}
            <Row style={{ marginTop: 5 }} gutter={[16, 16]} align='stretch'>
                <Col span={24}>
                    <h2>Dashboard Blank Page</h2>
                    <Card title={<div><SimpleLineIcon name="bell" /> You have 1 action item</div>} className='emboss-card'>
                        <p>You have 1 action item</p>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default BlankPage
import { Layout } from 'antd';
import React from 'react'

const {   Content } = Layout;
const IndexPage = () => {
  return (

    <Content
    className="site-layout-background"
    style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
    }}
>
    This is the Home Page
</Content>
  )
}

export default IndexPage
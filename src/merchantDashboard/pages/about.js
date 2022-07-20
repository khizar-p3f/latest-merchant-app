import { Layout } from 'antd';
import React from 'react'

const {   Content } = Layout;
const AboutPage = () => {
  return (

    <Content
    className="site-layout-background"
    style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
    }}
>
    This is the About Us Page
</Content>
  )
}

export default AboutPage
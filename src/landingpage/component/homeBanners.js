import React from 'react'
import { Carousel, Row,Col } from 'antd';
import '../theme/index.less'
import img1 from '../assets/images/svg2.svg'
import img2 from '../assets/images/svg3.svg'

const HomePageBanner = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className='carousel'>
            <Carousel afterChange={onChange} autoplay>
                <div className='banner-item'>
                    <Row>
                        <Col span={8}>
                            <img src={img1} height={300} />
                        </Col>
                        <Col span={16}>
                            <h2>New Merchant App</h2>
                            <h1>One stop shop for all payments solutions</h1>
                            <p>Since launching this collection, a few months ago, the use cases for Handcrafts are now more clear. So it's time to add new ones. This update brings a progressively more defined style, with lighter brush strokes. This will increase effectiveness and versatility significantly. Also the subject of each illustration continues to cover a wide variety of topics until there are more data on which ones are more useful and in demand.</p>
                        </Col>
                    </Row>
                </div>
                <div className='banner-item'>
                    <Row>
                        <Col span={8}>
                            <img src={img2} height={300} />
                        </Col>
                        <Col span={16}>
                            <h2>New Merchant App</h2>
                            <h1>One stop shop for all payments solutions</h1>
                            <p>Since launching this collection, a few months ago, the use cases for Handcrafts are now more clear. So it's time to add new ones. This update brings a progressively more defined style, with lighter brush strokes. This will increase effectiveness and versatility significantly. Also the subject of each illustration continues to cover a wide variety of topics until there are more data on which ones are more useful and in demand.</p>
                        </Col>
                    </Row>
                </div>               
            </Carousel>           
        </div>
    )
}

export default HomePageBanner
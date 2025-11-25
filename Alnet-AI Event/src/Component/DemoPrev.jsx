import React from 'react';
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const DemoData = [
    {
        id: 1,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-1.webp",
        title: "Main (Video Background)",
    },
    {
        id: 2,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-2.webp",
        title: "Slider Background",
    },
    {
        id: 3,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-3.webp",
        title: "Static Background",
    },
    {
        id: 4,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-4.webp",
        title: "Slider Text",
    },
    {
        id: 5,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-5.webp",
        title: "Video Background + Countdown",
    },
    {
        id: 6,
        image: "https://madebydesignesia.com/themes/aivent/demo/preview/homepage-6.webp",
        title: "Hero Image + Countdown",
    },
]

const DemoPrev = () => {
  return (
    <>
        <Container className='pt-5 mb-5 pb-5'>
            <div className='text-center'>
                <p className='mb-3'>[ All Demos Included ]</p>
                <h1 className='mb-5'>Demo Preview</h1>
            </div>
            <div>
                <Row className='g-4'>
                    {DemoData.map((d) => {
                        return(
                            <Col md={6} key={d.id}>
                                <Image src={d.image} alt="image" className='mb-3' rounded/>
                                <h4 className='text-center' style={{objectFit:"cover"}}>{d.title}</h4>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    </>
  )
}

export default DemoPrev

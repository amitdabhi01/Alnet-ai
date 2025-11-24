import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Features = () => {
  return (
    <>
        <Container className='pt-5 mb-5'>
            <div className='text-center'>
                <p className='mb-3'>[Why Choose AIvent]</p>
                <h1 className='mb-5'>AIvent Features</h1>
            </div>
            <div>
                <Row className='g-4'>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">Bootstrap 5 Framework</h3>
                            <p className='fs-5'>AIvent using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">Fast Loading</h3>
                            <p className='fs-5'>Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">Responsive Layouts</h3>
                            <p className='fs-5'>AIvent layouts can fit to all screens sizes so it looks great on any kind of devices. One website for all devices.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-4 border text-center">
                            <h1>23,000+</h1>
                            <p className='fs-5'>Clients Trust Designesia</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-4 border text-center">
                            <h1>17</h1>
                            <p className='fs-5'>Years of Experiences</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-4 border text-center">
                            <h1>Free</h1>
                            <p className='fs-5'>Lifetime Update</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">Font Awesome 6</h3>
                            <p className='fs-5'>AIvent using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">Swiper Slider</h3>
                            <p className='fs-5'>AIvent using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="features-box p-5 border">
                            <h3 className="mb-3">PHP Form</h3>
                            <p className='fs-5'>AIvent using latest Bootstrap 5 framework. The most camplete and flexible framework for website development.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Features

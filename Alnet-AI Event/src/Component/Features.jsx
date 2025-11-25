import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Features2 from './Features2';

const FeaturesData = [
    {
        id: 1,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/booststrap-5.png",
        title: "Bootstrap 5 Framework",
        description:"AIvent using latest Bootstrap 5 framework. The most complete and flexible framework for website development."
    },
    {
        id: 2,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/flash.png",
        title: "Fast Loading",
        description:"Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!"
    },
    {
        id: 3,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/responsive.png",
        title: "Responsive Layouts",
        description:"AIvent layouts can fit to all screens sizes so it looks great on any kind of devices. One website for all devices, it make looking good."
    },

]

const Features = () => {
  return (
    <>
        <Container className='pt-5 mb-5 pb-5'>
            <div className='text-center'>
                <p className='mb-3'>[ Why Choose AIvent ]</p>
                <h1 className='mb-5'>AIvent Features</h1>
            </div>
            <div>
                <Row className='g-4'>
                    {FeaturesData.map((f) => {
                        return(
                            <Col md={4} key={f.id}>
                                <div className="p-5" style={{borderRadius:"20px", backgroundColor:"#1A1E42"}}>
                                    <Image src={f.image} className='mb-3' style={{width:"100px"}}/>
                                    <h3 className="mb-3">{f.title}</h3>
                                    <p className='fs-5'>{f.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col md={4}> 
                        <div className='p-4 mt-5' style={{backgroundColor:"#442490", borderRadius:"20px"}}>
                            <h1 className='text-center'>23,000+</h1>
                            <p className='text-center fs-6'>Clients Trust Designesia</p>
                        </div>  
                    </Col>
                    <Col md={4}> 
                        <div className='p-4 mt-5' style={{backgroundColor:"#442490", borderRadius:"20px"}}>
                            <h1 className='text-center'>17</h1>
                            <p className='text-center fs-6'>Years of Experiences</p>
                        </div>  
                    </Col>
                    <Col md={4}> 
                        <div className='p-4 mt-5' style={{backgroundColor:"#442490", borderRadius:"20px"}}>
                            <h1 className='text-center'>Free</h1>
                            <p className='text-center fs-6'>Lifetime Update</p>
                        </div>  
                    </Col>
                </Row>
                <Features2/>
            </div>
        </Container>
    </>
  )
}

export default Features;

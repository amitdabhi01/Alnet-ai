import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const FeaturesData = [
    {
        id: 4,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/font-awesome-6.png",
        title: "Font Awesome 6",
        description:"Font Awesome is the world's most popular icon set and toolkit. We include latest version of Font Awesome."
    },
    {
        id: 5,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/swiper-slider.png",
        title: "Swiper Slider",
        description:"Swiper is the most modern free and open source slider with hardware accelerated transitions and amazing native behavior."
    },
    {
        id: 6,
        image:"https://madebydesignesia.com/themes/aivent/demo/icons/php.png",
        title: "PHP Form",
        description:"A clean, clear and functional PHP form that collects all over user input and processes it securely with our client trust."
    },
]

const Features2 = () => {
  return (
    <>
        <Container className='pt-5 mb-5'>    
            <div>
                <Row className='g-4'>
                    {FeaturesData.map((f) => {
                        return(
                            <Col md={4} key={f.id}>
                                <div className="features-box p-5" style={{borderRadius:"20px", backgroundColor:"#1A1E42"}}>
                                    <Image src={f.image} className='mb-3' style={{width:"100px"}}/>
                                    <h3 className="mb-3">{f.title}</h3>
                                    <p className='fs-5'>{f.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Features2;

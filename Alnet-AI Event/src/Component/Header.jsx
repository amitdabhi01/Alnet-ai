import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <>
        <Container fluid className='mb-5'>
            <div className='text-center'> 
              <p>[Introducing AIvent]</p>
              <h1 className='mb-4'>
                AI Event Website <br /> Template
              </h1>
              <p className='mb-4'>AIvent combines top-tier coding and design standards to help you build a <br /> professional-looking website quickly and effortlessly.</p>
              <Button>VIEW DEMO</Button>
            </div>
        </Container>
    </>
  )
}

export default Header

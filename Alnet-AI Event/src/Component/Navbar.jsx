import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container className='justify-content-between'>
        <Navbar.Brand href="#home">
            <h1>ALvent</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"> 
            <Nav.Link href="#home" className='me-4'>Home</Nav.Link>
            <Nav.Link href="#link" className='me-4'>Features</Nav.Link>
            <Nav.Link href="#link" className='me-4'>Demo Preview</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button>BUY NOW</Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
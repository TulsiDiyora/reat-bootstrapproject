import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sheader.css'

function Sheader() {
  return (
    <Navbar expand="lg"  style={{ backgroundColor: '#7E4C4F' }} >
      <Container className='py-3'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dog">Dog</Nav.Link>
            <Nav.Link href="#cat">Cat</Nav.Link>
            <Nav.Link href="#bird">Bird</Nav.Link>
            <Nav.Link href="#fish">Fish</Nav.Link>
            <NavDropdown title="Pups and Kittens" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#faqs">Faqs</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sheader;
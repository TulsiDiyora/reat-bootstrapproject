import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo.png'
import Form from 'react-bootstrap/Form';
import './Header.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" py-4">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex m-auto s-form position-relative">
            <Form.Control type="search" placeholder="Search" className=" search-bar" aria-label="Search" />
            <a href="#" className='position-absolute top-50 end-0 translate-middle-y text-white rounded-circle me-2 s-btn'>
            <i className="bi bi-search"></i>
            </a>
          </Form>
          <div className="header-icon d-flex align-items-center">
            <div className="heart me-3">
              <i className="bi bi-suit-heart-fill"></i>
            </div>
            <div className="shopping">
            <i className="bi bi-cart-fill"></i>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
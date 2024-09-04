import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <>
        <section className='footer-bg'>
            <Container fluid>
                <Row>
                    <div className="col-3">
                       <div className="f-content ">
                        <h2 className='fw-semibold'>About Us</h2>
                        <p className='mt-4'>
                        When I look into the eyes of an animal<br/>
                        I do not see an animal. I see a living<br/>
                        being. I see a friend. I feel a soul. Since<br/>they can't speak, let us become their<br/> voice
                        </p>
                        <div className="f-icon ">
                            <ul className='d-flex align-items-center'>
                                <li>
                                    <a href="#">
                                    <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="bi bi-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                       </div>
                    </div>
                    <div className="col-2">
                       <div className="f-content">
                           <h2 className='fw-semibold'>Link</h2>
                           <div className="fc">
                            <ul className='mt-4'>
                                <li >
                                    <a href="#" className='mt-5'>Search</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#"> Information</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Shipping Details</a>     
                                </li>
                            </ul>
                           </div>
                        </div> 
                    </div>
                    <div className="col-2">
                       <div className="f-content">
                           <h2 className='fw-semibold'>Help</h2>
                           <div className="fc">
                            <ul className='mt-4'>
                                <li >
                                    <a href="#" className='mt-5'>Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#"> Careers</a>
                                </li>
                                <li>
                                    <a href="#">Refund & Return</a>
                                </li>
                                <li>
                                    <a href="#">Deliveries</a>     
                                </li>
                            </ul>
                           </div>
                        </div> 
                    </div>
                    <div className="col-2">
                       <div className="f-content">
                           <h2 className='fw-semibold'>Information</h2>
                           <div className="fc">
                            <ul className='mt-4'>
                                <li >
                                    <a href="#" className='mt-5'>Search Terms</a>
                                </li>
                                <li>
                                    <a href="#">Advanced Search</a>
                                </li>
                                <li>
                                    <a href="#">Help & Faq's</a>
                                </li>
                                <li>
                                    <a href="#">Store Location</a>
                                </li>
                                <li>
                                    <a href="#">Order & Return</a>     
                                </li>
                            </ul>
                           </div>
                        </div> 
                    </div>
                    <div className="col-3">
                       <div className="f-content">
                           <h2 className='fw-semibold'>Contact us</h2>
                           <div className="fc">
                            <ul className='mt-4'>
                                <li >
                                    <a href="#" className='mt-5'>
                                        <i className="bi bi-house-door-fill me-2"></i>
                                        No: 58 A, East Madison Street,
                                    </a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#">
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        0000 - 123456789
                                    </a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#">
                                        <i className="bi bi-clock me-2"></i>
                                        9.30AM - 7.30PM
                                    </a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#">
                                    <i className="bi bi-envelope-fill me-2"></i>
                                        mail@example.com
                                    </a>
                                </li>
                            </ul>
                           </div>
                        </div> 
                    </div>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Footer

import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import Tipsimg1 from '../../assets/hacktips.webp'
import Tipsimg2 from '../../assets/hacktips2.webp'
import Tipsimg3 from '../../assets/hacktips3.webp'
import './TipsHacks.css'

function TipsHacks() {
  return (
   <>
        <section className='py-100'>
            <Container>
                <div className="title text-center">
                    <span>
                    Blog & News
                    </span>
                    <h2 className='fw-bold'>
                    Tips & Hacks
                    </h2>
                </div>
                <Row>
                <div className="col-12">
              <Carousel controls={false} > 
                <Carousel.Item>
                <div className="tips-content  d-flex align-items-center mt-5">
                    <div className="tips-img">
                        <img src={Tipsimg1} width={575} height={372} />
                    </div>
                    <div className="th-content">
                        <div className="th-cart position-relative">
                        <div className="ad d-flex ">
                        <div className="admin">
                                <span>
                                <i className="bi bi-person-fill pe-2"></i>
                                Isaac-demo Admin
                                </span>
                            </div>
                            <div className="date ms-3">
                            <span >
                                <i className="bi bi-calendar3 pe-2 "></i>
                                February 3, 2018
                                </span>
                            </div>
                        </div>
                        <div className="comment mt-2">
                            <span>
                            <i className="bi bi-chat-dots-fill pe-2"></i>
                            0 Comments
                            </span>
                        </div>
                        </div>
                        <div className="t-content mt-4">
                            <h3 className='fw-bold'>
                            The Lone Bird in Snow
                            </h3>
                            <p>
                            Ormes&nbsp;donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt cras dapibus....

                            </p>
                            <div className="read-btn mt-4 ">
                                <a href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="tips-content  d-flex align-items-center mt-5">
                    <div className="tips-img">
                        <img src={Tipsimg2} width={575} height={372} />
                    </div>
                    <div className="th-content">
                        <div className="th-cart position-relative">
                        <div className="ad d-flex ">
                        <div className="admin">
                                <span>
                                <i className="bi bi-person-fill pe-2"></i>
                                Isaac-demo Admin
                                </span>
                            </div>
                            <div className="date ms-3">
                            <span >
                                <i className="bi bi-calendar3 pe-2 "></i>
                                February 3, 2018
                                </span>
                            </div>
                        </div>
                        <div className="comment mt-2">
                            <span>
                            <i className="bi bi-chat-dots-fill pe-2"></i>
                            0 Comments
                            </span>
                        </div>
                        </div>
                        <div className="t-content mt-4">
                            <h3 className='fw-bold'>
                            The Lone Bird in Snow
                            </h3>
                            <p>
                            Ormes&nbsp;donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt cras dapibus....

                            </p>
                            <div className="read-btn mt-4 ">
                                <a href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="tips-content  d-flex align-items-center mt-5">
                    <div className="tips-img">
                        <img src={Tipsimg3} width={575} height={372} />
                    </div>
                    <div className="th-content">
                        <div className="th-cart position-relative">
                        <div className="ad d-flex ">
                        <div className="admin">
                                <span>
                                <i className="bi bi-person-fill pe-2"></i>
                                Isaac-demo Admin
                                </span>
                            </div>
                            <div className="date ms-3">
                            <span >
                                <i className="bi bi-calendar3 pe-2 "></i>
                                February 3, 2018
                                </span>
                            </div>
                        </div>
                        <div className="comment mt-2">
                            <span>
                            <i className="bi bi-chat-dots-fill pe-2"></i>
                            0 Comments
                            </span>
                        </div>
                        </div>
                        <div className="t-content mt-4">
                            <h3 className='fw-bold'>
                            The Lone Bird in Snow
                            </h3>
                            <p>
                            Ormes&nbsp;donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Integer tincidunt cras dapibus....

                            </p>
                            <div className="read-btn mt-4 ">
                                <a href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </Carousel.Item>
              </Carousel>
            </div>
                </Row>
            </Container>
        </section>
   </>
  )
}

export default TipsHacks

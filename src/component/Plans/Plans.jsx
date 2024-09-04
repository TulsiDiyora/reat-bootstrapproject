import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Planimg1 from '../../assets/planimg1.webp'
import Planimg2 from '../../assets/planimg2.webp'
import Planimg3 from '../../assets/planimg3.webp'
import './Plans.css'

function Plans() {
  return (
   <>
        <section className='py-100'>
            <Container>
            <div className="title text-center mb-5">
                <span>
                    Packages
                </span>
                <h2 className='fw-bold'>
                    Wellness Plans
                </h2>
            </div>
            <Row>
            <div className="col-4">
                <div className="plans-card text-center position-relative">
                    <div className="plan-img">
                        <img src={Planimg1} className='rounded-circle' width={130} height={130} />
                    </div>
                    <div className="plan-content mt-5">
                        <h2 >We Care For Pups</h2>
                        <ul>
                            <li><h6>Combing &amp; Shampooing</h6></li>
                            <li><h6>Immunizations</h6></li>
                            <li><h6>Walking &amp; Toilet Training</h6></li>
                            <li><h6>Healthy Food &amp; Clean water</h6></li>
                        </ul>
                        <div className="price mt-4">
                            <h2 className='fw-bold'>$50 per week</h2>
                        </div>
                        <div className="book-btn mt-5 mb-4">
                            <a href="#">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="plans-card text-center position-relative">
                    <div className="plan-img">
                        <img src={Planimg2} className='rounded-circle' width={130} height={130} />
                    </div>
                    <div className="plan-content mt-5">
                        <h2 >Caring for Kittens</h2>
                        <ul>
                            <li><h6>Cat Beds</h6></li>
                            <li><h6>Wet Cat Food</h6></li>
                            <li><h6>Kitten Toys</h6></li>
                            <li><h6>Cats Shedding</h6></li>
                        </ul>
                        <div className="price mt-4">
                            <h2 className='fw-bold'>$50 per week</h2>
                        </div>
                        <div className="book-btn mt-5 mb-4">
                            <a href="#">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="plans-card text-center position-relative">
                    <div className="plan-img">
                        <img src={Planimg3} className='rounded-circle' width={130} height={130} />
                    </div>
                    <div className="plan-content mt-5">
                        <h2 >Winged Visitors</h2>
                        <ul>
                            <li><h6>Winged Visitors</h6></li>
                            <li><h6>Health Supplies</h6></li>
                            <li><h6>Birds Nests</h6></li>
                            <li><h6>Birding Supplies</h6></li>
                        </ul>
                        <div className="price mt-4">
                            <h2 className='fw-bold'>$50 per week</h2>
                        </div>
                        <div className="book-btn mt-5 mb-4">
                            <a href="#">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </Row>
            </Container>
        </section>
   </>
  )
}

export default Plans

import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './PetFood.css'

function PetFood() {
  return (
    <>
        <section className='py-100'>
            <Container>
                <div className="title text-center">
                    <span>
                        For Any Occasion
                    </span>
                    <h2 className='fw-bold mt-2'>
                        All Types Of Pets Food
                    </h2>
                </div>
                <Row>
                    <div className="col-3 text-center">
                        <div className="food-cart position-relative">
                            <div className="food-img1">
                                {/* <img src={Food1}  /> */}
                            </div>
                            <div className="food-content mt-4 ">
                                <a href="#" className='h5'>
                                    Energizing Dog Food 
                                </a>
                            <div className="fc mb-2">
                            <span>
                                    Gourmet Fido
                                </span>
                            </div>
                              <div className="f-line mt-2 position-relative "></div>
                            </div>
                                <div className="price mt-3 fw-bold">
                                    <span>Rs.18.47</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="food-cart position-relative">
                            <div className="food-img2">
                            </div>
                            <div className="food-content mt-4 ">
                                <a href="#" className='h5'>
                                    Energetic Meat & Rice 
                                </a>
                            <div className="fc mb-2">
                            <span>
                                 Food Bites
                            </span>
                            </div>
                              <div className="f-line mt-2 position-relative "></div>
                            </div>
                                <div className="price mt-3 fw-bold">
                                    <span>Rs.19.35</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="food-cart position-relative">
                            <div className="food-img3">
                            </div>
                            <div className="food-content mt-4 ">
                                <a href="#" className='h5'>
                                     Tuna & Salmon Dry Food 
                                </a>
                            <div className="fc mb-2">
                                <span>
                                    Kibble Treat
                                </span>
                            </div>
                              <div className="f-line mt-2 position-relative "></div>
                            </div>
                                <div className="price mt-3 fw-bold">
                                    <span>Rs.22.36</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="food-cart position-relative">
                            <div className="food-img4">
                            </div>
                            <div className="food-content mt-4 ">
                                <a href="#" className='h5'>
                                    Pupy Dry Formula Food 
                                </a>
                            <div className="fc mb-2">
                                <span>
                                     YumTumz
                                </span>
                            </div>
                              <div className="f-line mt-2 position-relative "></div>
                            </div>
                                <div className="price mt-3 fw-bold">
                                    <span>Rs.22.65</span>
                                </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default PetFood

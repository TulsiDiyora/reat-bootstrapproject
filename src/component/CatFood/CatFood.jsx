import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import CatFood1 from '../../assets/catfood1.webp'
import CatFood2 from '../../assets/catfood2.webp'
import CatFood3 from '../../assets/catfood3.webp'
import './CatFood.css'

function CatFood() {
  return (
   <>
    <section className='cat-banner'>
        <Container >
        <Row className='align-items-center cat-banner1'>
               <div className="col-4"></div>
               <div className="col-8 ">
               <Carousel>
                    <Carousel.Item>
                    <div className="cat-food d-flex  align-items-center">
                        <div className="c-img">
                                <img src={CatFood1} alt="" />
                        </div>
                        <div className="cat-text ms-5 text-center">
                                <h5 className='fw-semibold'>Chicken Cat Food </h5>
                                <span className='fw-bold'>
                                    Rs.22.54
                                </span>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="cat-food d-flex  align-items-center">
                        <div className="c-img">
                                <img src={CatFood2} alt="" />
                        </div>
                        <div className="cat-text ms-5 text-center">
                                <h5 className='fw-semibold'>Oats & Veggies  Food </h5>
                                <span className='fw-bold'>
                                    Rs.23.33
                                </span>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="cat-food d-flex  align-items-center">
                        <div className="c-img">
                                <img src={CatFood3} alt="" />
                        </div>
                        <div className="cat-text ms-5 text-center">
                                <h5 className='fw-semibold'>Cats Formula Food </h5>
                                <span className='fw-bold'>
                                    Rs.20.47
                                </span>
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

export default CatFood

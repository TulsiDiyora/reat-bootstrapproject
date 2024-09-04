import React from 'react'
import { Container, Row } from 'react-bootstrap'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import './ClientSection.css'

function ClientSection() {
  return (
    <>
        <section className='py-100'>
            <Container>
            <div className="title text-center">
                <span>
                    Customer Support
                </span>
                <h2 className='fw-bold'>
                    Client Section
                </h2>
            </div>
            <Row className=' text-center mt-5'>
                <div className="col-2">
                    <div className="icon-img">
                        <img src={icon1} width={155}/>
                    </div>
                </div>
                <div className="col-2">
                    <div className="icon-img">
                        <img src={icon2} width={155}/>
                    </div>
                </div>
                <div className="col-2">
                   <div className="icon-img">
                        <img src={icon3} width={155}/>
                   </div>
                </div>
                <div className="col-2">
                   <div className="icon-img">
                        <img src={icon4} width={155}/>
                   </div>
                </div>
                <div className="col-2">
                    <div className="icon-img">
                         <img src={icon5} width={155}/>
                    </div>
                </div>
                <div className="col-2">
                    <div className="icon-img">
                         <img src={icon6} width={155}/>
                    </div>
                </div>

            </Row>
            </Container>
        </section>
    </>
  )
}

export default ClientSection

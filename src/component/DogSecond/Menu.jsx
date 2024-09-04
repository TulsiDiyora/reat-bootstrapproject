import React from 'react'
import  {Container, Row} from 'react-bootstrap'
import D1 from '../../assets/d1.webp'
import D2 from '../../assets/d2.webp'
import D3 from '../../assets/d3.webp'
import D4 from '../../assets/d4.webp'
import D5 from '../../assets/d5.webp'
import D6 from '../../assets/d6.webp'
import D7 from '../../assets/d7.webp'
import ShowBtn from '../ShowBtn/ShowBtn';
import './Menu.css'
function Menu() {
  return (
   <>
        <section>
            <Container>
                <Row className='pb-100'>
                    <div className="col-3  text-center">
                        <div className="d-img">
                            <img src={D1}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Birds [7]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center">
                        <div className="d-img">
                            <img src={D2}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Cat [2]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center">
                        <div className="d-img">
                            <img src={D2}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Dog [7]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center">
                        <div className="d-img">
                            <img src={D3}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Fish [1]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center mt-5">
                        <div className="d-img">
                            <img src={D4}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Home page [5] </h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center mt-5">
                        <div className="d-img">
                            <img src={D5}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Kittens [1]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center mt-5">
                        <div className="d-img">
                            <img src={D6}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Latest Products [6]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                    <div className="col-3  text-center mt-5">
                        <div className="d-img">
                            <img src={D7}  />
                        </div>
                        <div className="d-content mt-4 ">
                            <h4 className=' fw-bold'>Pups [4]</h4>
                        </div>
                        <ShowBtn />
                    </div>
                </Row>
            </Container>
        </section>
   </>
  )
}

export default Menu

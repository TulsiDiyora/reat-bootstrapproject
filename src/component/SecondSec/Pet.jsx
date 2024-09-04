import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Dogimg from '../../assets/dog.webp'
import Catimg from '../../assets/cat.webp'
import Bridimg from '../../assets/brid.webp'
import ShowBtn from '../ShowBtn/ShowBtn'
import './Pet.css'


function Pet() {
  return (
   <>
    <section className='py-100'>
        <Container>
            <div className="title text-center">
                <span>
                    We specialize in our Passion
                </span>
                <h2 className='fw-bold'>
                    Caring for Pets & Sheltering
                </h2>
            </div>
            <Row >
                <div className="col-4">
                    <div className="dog-box text-center">
                        <img src={Dogimg}  />
                        <div className="dog-content mt-4">
                            <a href="#" className='h4 fw-bold' style={{color:'#7E4C4F'}}>
                                 Dalmatian
                            </a>
                            <p className='mt-2 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor <br />
                             incididunt ut labore et dolore <br />
                             Dolorum atque
                            </p>
                           <ShowBtn />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="dog-box text-center">
                        <img src={Catimg}  />
                        <div className="dog-content mt-4">
                            <a href="#" className='h4 fw-bold' style={{color:'#7E4C4F'}}>
                            Turkish Angora
                            </a>
                            <p className='mt-2 mb-4'>
                            Tortor at risus viverra adipiscing. Odio <br />
                            facilisis mauris sit amet. Neque laoreet <br />
                            suspendisse interdum consectetur libero <br />
                            id faucibus.
                            </p>
                            <ShowBtn />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="dog-box text-center">
                        <img src={Bridimg}  />
                        <div className="dog-content mt-4">
                            <a href="#" className='h4 fw-bold' style={{color:'#7E4C4F'}}>
                            Scarlet Macaw
                            </a>
                            <p className='mt-2 mb-4'>
                            Id volutpat lacus laoreet non curabitur. <br />
                            Diam phasellus vestibulum lorem sed. <br />
                            Porttitor leo a diam sollicitudin tempor id <br />
                            rhoncus.
                            </p>
                            <ShowBtn />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
   </>
  )
}

export default Pet;

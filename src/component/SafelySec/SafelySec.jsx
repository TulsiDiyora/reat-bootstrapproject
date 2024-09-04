import React from 'react'
import { Container } from 'react-bootstrap'
import './SafelySec.css'

function SafelySec() {
  return (
    <>
        <section className='safely-img '>
            <Container>
            <div className="title text-center">
                <span className='mb-3'>
                    We specialize in our Passion
                </span>
                <h2 className='fw-bold text-white mb-4'>
                    Caring for Pets & Sheltering
                </h2>
                <span className='text-white' style={{fontFamily:'"Fredoka", sans-serif', fontSize:'16px'}}>
                When you are travelling and need a place to keep your pets,<br />
                Come to Isaac Pet Care and leave your darlings...you will come again and again and again!
                </span>
                <div className="pet-btn mt-5">
                    <a href="#">
                    Isaac Pet Care Shelter
                    </a>
                </div>
            </div>
            </Container>
        </section>
    </>
  )
}

export default SafelySec

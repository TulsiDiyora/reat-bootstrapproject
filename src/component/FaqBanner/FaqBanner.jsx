import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './FaqBanner.css'

function FaqSec() {
  return (
    <>
        <section className='dog-banner'>
        <Container>
            <div className="dog-title text-center text-white">
                <h1 className=' mb-3 fw-bold'>Faqs</h1>
                <a href="#" className='text-white'>Home / Faq</a>
            </div>
        </Container>
    </section>
    </>
  )
}

export default FaqSec

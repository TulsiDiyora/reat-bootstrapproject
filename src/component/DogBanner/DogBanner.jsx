import React from 'react'
import { Container } from 'react-bootstrap'
import './DogBanner.css'

function DogBanner() {
  return (
   <>
    <section className='dog-banner'>
        <Container>
            <div className="dog-title">
                <h1 className='text-center text-white fw-bold'>All Collection</h1>
            </div>
        </Container>
    </section>
   </>
  )
}

export default DogBanner

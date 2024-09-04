import React from 'react'
import Banner from '../Banner/Banner'
import Pet from '../SecondSec/Pet'
import SafelySec from '../SafelySec/SafelySec'
import PetFood from '../PetFood/PetFood'
import CatFood from '../CatFood/CatFood'
import Plans from '../Plans/Plans'
import Hacodion from '../Haccodion/Hacodion'
import TipsHacks from '../TipsHacks/TipsHacks'
import Review from '../Review/Review'
import ClientSection from '../ClientSection/ClientSection'

function Main() {
  return (
    <>
        <main>
            <Banner />
            <Pet />
            <SafelySec />
            <PetFood />
            <CatFood />
            <Plans />
            <Hacodion />
            <TipsHacks />
            <Review />
            <ClientSection />
        </main>
    </>
  )
}

export default Main


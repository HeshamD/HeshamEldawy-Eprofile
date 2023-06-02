import React from 'react'
import Hero from './hero/Hero'
import HomeProject from './homeProject/HomeProject'
import MainHeader from '../header/MainHeader'
import HomeSkills from './homeSkills/HomeSkills'

function Home() {
    return (
        <>
            <MainHeader />
            <Hero />
            <HomeProject />
            <HomeSkills />
        </>
    )
}

export default Home
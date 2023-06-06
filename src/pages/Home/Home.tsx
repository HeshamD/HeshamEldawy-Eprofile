import React from 'react'
import Hero from './hero/Hero'
import HomeProject from './project/Project'
import MainHeader from '../../components/header/MainHeader'
import HomeSkills from '../skills/skills'

function Home() {
    return (
        <>
            <MainHeader />
            <Hero />
            <HomeProject />
            {/* <HomeSkills /> */}
        </>
    )
}

export default Home
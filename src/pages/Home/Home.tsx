import Hero from './hero/Hero'
import HomeProject from './project/Project'
import MainHeader from '../../components/header/MainHeader'

function Home() {
    return (
        <>
            <MainHeader />
            <Hero />
            <HomeProject />
        </>
    )
}

export default Home
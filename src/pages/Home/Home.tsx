import FooterContent from '../../components/footer/FooterContent'
import MainHeader from '../../components/header/MainHeader'
import Hero from './old/hero/Hero'
import Intro from './onePage/Intro'
import Projects from './onePage/Projects/Projects'
import ChangeTheme from './onePage/changeTheme/ChangeTheme'
import './homeStyling.css';
function Home() {
    return (
        <main>
            <section className='wide-container' >
                <Intro />
                <Projects />
                <ChangeTheme />
            </section >
            <section className='box home-box'>
                <MainHeader />
                <Hero />
                <FooterContent />
            </section>
        </main>

    )
}

export default Home
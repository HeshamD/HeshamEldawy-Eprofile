import './navStyling.css';
const MainHeader = () => {
    return (
        <header>
            <nav className='nav collasible collasible--expanded'>
                <a href="/"><img src="logo.png" height={90} width={150} alt="" /></a>
                <svg className='icon icon--white nav__toggler'>
                    <use xlinkHref="sprite.svg#menu"></use>
                </svg>
                <ul className='list nav__list collasible__content'>
                    <li className='nav__item'><a href="#">About me</a></li>
                    <li className='nav__item'><a href="#">Projects</a></li>
                    <li className='nav__item'><a href="#">Work Experience</a></li>
                    <li className='nav__item'><a href="#">Blog</a></li>
                    <li className='nav__item'><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </header >
    )
}

export default MainHeader
import { useEffect } from 'react';
import './NavStyling.css';
import { Link, NavLink } from 'react-router-dom';
const MainHeader = () => {

    return (
        <header>
            <nav className='nav collasible collasible--expanded'>
                <a href="/">
                    <img src="logo.png" height={90} width={150} alt="" />
                </a>
                <svg className='icon icon--white nav__toggler'>
                    <use xlinkHref="sprite.svg#menu"></use>
                </svg>
                <ul className='list nav__list collasible__content'>
                    <li className='nav__item'>
                        <NavLink to="/">.is()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/projects">.Projects()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/work_Experience">.WorkExperience()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/education">.Education()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/awards">.Awards()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/blog">.Blog()</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/contacts">.Contact()</NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default MainHeader
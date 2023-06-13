import { useEffect } from 'react';
import './NavStyling.css';
import { Link, NavLink } from 'react-router-dom';
const MainHeader = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const navbar = document.querySelector('.nav');
        if (navbar) {
            let parentElement = navbar.parentElement;
            while (parentElement) {
                if (parentElement.classList.contains('box')) {
                    return; // Deactivate scroll functionality if parent has .box class
                }
                parentElement = parentElement.parentElement;
            }

            if (window.pageYOffset > 0) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    };

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
                        <NavLink to="/contacts">.Contact()</NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default MainHeader
import React, { useEffect } from 'react'
import './HeroStyling.css';


const Hero = () => {
    return (
        <section className="block block--dark hero">
            <div className="container grid grid--1x2">
                <header className="block__header hero__content" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <h1 className="block__heading hero__heading">dawy<span>.is()</span></h1>
                    <p className="hero__tagline">
                        Hi there! My name is Hesham Eldawy,I thrive on turning ideas into reality and enjoy solving complex problems through innovative solutions. My expertise lies in front-end technologies like <span> HTML</span>, <span> CSS</span> and <span> JavaScript</span>, as well as modern frameworks like <span>React.js</span>.
                        I'm also proficient in <span>back-end</span> development using <span>Node.js</span> and have experience working with <span>databases</span> such as <span>MongoDB</span>,<span>TSQL</span>,<span>MySQL</span>.
                        <strong style={{ display: 'block', color: '#fff' }}>I'm passionate about collaborating with like-minded individuals and teams to create meaningful and impactful software solutions. If you have a project or an opportunity you'd like to discuss, feel free to reach out!</strong>
                    </p>
                    <a href="mailto:heshameldawy@outlook.com" className="btn btn--outline--empty btn--stretched hero__btn">Contact Me</a>
                </header>
                <picture data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <source type='png' srcSet='banner.png 1x, banner@2x.png 2x' />
                    <img src="cubic.png" className='hero__image' alt="" />
                </picture>
            </div>
        </section >
    )
}

export default Hero
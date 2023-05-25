import React, { useEffect } from 'react'
import './HeroStyling.css';


const Hero = () => {
    return (
        <section className="block block--dark hero">
            <div className="container grid grid--1x2">
                <header className="block__header hero__content" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000">
                    <h1 className="block__heading hero__heading">About Me</h1>
                    <p className="hero__tagline">Welcome! My name is Hesham, I'm dedicated software engineer with a passion for crafting
                        innovative solutions. With expertise in <span>Java, C#, TypeScript, JavaScript,
                        </span>and <span>Python</span>. I love turning complex problems into elegant, user-friendly applications.
                        Through my analytical mindset and commitment to continuous learning, I strive to deliver
                        high-quality software that makes a positive impact. Let's create something extraordinary together!
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
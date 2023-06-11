import React, { useEffect, useRef } from 'react';
import './mainStyling.css';
const Intro = () => {

    useEffect(() => {
        const handleScroll = () => {
            let offsetY = window.scrollY;

            const saluteTextContainer = document.querySelector('.saluteTextContainer') as HTMLElement;
            if (saluteTextContainer) {
                saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
            }

            const saluteImgContainer = document.querySelector('.saluteImgContainer') as HTMLElement;
            if (saluteImgContainer) {
                saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`;
            }

            const authorName = document.querySelector('.name') as HTMLElement;
            if (authorName) {
                authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
            }

            const jobTitleContainers = document.querySelectorAll('.jobTitleContainer') as NodeListOf<HTMLElement>;
            if (jobTitleContainers.length >= 2) {
                jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
                jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
            }

            const jobTitles = document.querySelectorAll('.jobTitle') as NodeListOf<HTMLElement>;
            if (jobTitles.length >= 2) {
                jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
                jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="intro">
            <div className="salute">
                <div className="saluteTextContainer">
                    <h1 className="saluteText">Hi</h1>
                </div>
                <div className="saluteImgContainer">
                    <img src="home/mainImgs/person.png" alt="person image" className='saluteImg' />
                </div>
            </div>
            <div className="nameContainer">
                <h2 className="name">I'm Hesham</h2>
            </div>
            <div className="jobTitleContainer dark-bg">
                <h2 className="jobTitle jobTitle__first">the Software Engineer</h2>
            </div>
            <div className="jobTitleContainer white-bg">
                <h2 className="jobTitle jobTitle__second">and BodyBuilder</h2>
            </div>
        </div>
    )
}

export default Intro
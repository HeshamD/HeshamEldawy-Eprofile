import React, { useEffect } from 'react';
import './changeTheme.css'
const ChangeTheme: React.FC = () => {

    useEffect(() => {
        const handleScroll = () => {
            let offsetY = window.scrollY;

            const changeThemeContainer = document.querySelector('.changeThemeTitle') as HTMLElement;
            if (changeThemeContainer) {
                changeThemeContainer.style.backgroundPositionY = `${offsetY * 0.5}px`;
            }

            const changeThemeTitle = document.querySelector('.changeThemeTitle') as HTMLElement;
            if (changeThemeTitle) {
                changeThemeTitle.style.transform = `translateX(calc(700vh - ${offsetY}px))`;
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
            <div className="changeThemeContainer">
                <h2 className="changeThemeTitle">Let's go to a different world!</h2>
            </div>
        </div>

    );
};

export default ChangeTheme;
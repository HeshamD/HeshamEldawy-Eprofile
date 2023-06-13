import React, { useEffect } from 'react';
import './projectStyling.css';
import projects from './ProjectsConst';

const Projects: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            let offsetY = window.scrollY;

            const projectsTitle = document.querySelector('.projectsTitle') as HTMLElement;
            if (projectsTitle) {
                projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
            }

            const phones = document.querySelector('.phone') as HTMLElement;
            if (phones) {
                phones.style.transform = `translateX(calc(480vh - ${offsetY}px))`;
            }

            const laptop = document.querySelector('.laptop') as HTMLElement;
            if (laptop) {
                laptop.style.transform = `translateY(calc(580vh - ${offsetY}px))`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="projects">
            <h1 className="projectsTitle">Here are some of my projects</h1>
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <div className={project.projectType}>
                        <img src={project.projectDevice} alt="" className={`${project.projectType}Img`} />
                        <div className={project.ProjectDeviceClass}>
                            <img src={project.projectImg} alt="" className={project.ProjectImgClass} />
                        </div>
                    </div>
                    <div className="projectDetail">
                        <h1 className="projectTitle">{project.title}</h1>
                        <p className="projectDesc">{project.projectDesc}</p>
                        <a href={project.projectLink} className="projectButton">Learn More</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;

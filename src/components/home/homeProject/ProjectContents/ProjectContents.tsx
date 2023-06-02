import React from 'react';
import './ProjectContentsStyling.css';
import { Link, NavLink } from 'react-router-dom';

interface Project {
    imgSrc: string;
    imgAlt: string;
    projectName: string;
    projectType: string;
}

const ProjectItem = ({ imgSrc, imgAlt, projectName, projectType }: Project) => (
    <li className='list__item'>
        <Link to="/projects" className='link--img'>
            <div className='project_img'>
                <img src={imgSrc} alt={imgAlt} className='project__img' />
            </div>
        </Link>

        <h3 className='project__text'>{projectName}</h3>
        <span className='project__type'>{projectType}</span>
    </li>
);

const ProjectContents = () => {
    const projects: Project[] = [
        { imgSrc: 'imgs/1.png', imgAlt: 'first project image which programmed in .NET', projectName: 'Top Ten Errors', projectType: 'Web Application' },
        { imgSrc: 'imgs/2.png', imgAlt: 'second project image, created for translation office', projectName: 'Translation office', projectType: 'Web Application' },
        { imgSrc: 'imgs/3.png', imgAlt: 'movie rental project in react.js', projectName: 'Game Rental - React.js', projectType: 'Web Application' },
        { imgSrc: 'imgs/4.png', imgAlt: 'movie rental project in react.js', projectName: 'Game Rental - React.js', projectType: 'Web Application' }
    ];

    return (
        <div className='project__contents'>
            <ul className='list list--inline'>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        projectName={project.projectName}
                        projectType={project.projectType}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProjectContents;

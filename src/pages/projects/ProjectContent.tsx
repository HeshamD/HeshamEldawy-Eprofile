import React from 'react';
import './projectStyling.css';
import projects, { Project } from './ProjectConst';


const ProjectContent: React.FC<Project> = (project: Project) => {
    return (
        <section className="block container">
            <article className="grid grid--1x2 feature">
                <div className="feature__content">
                    <span className="icon-container">
                        <svg className="icon icon--primary">
                            <use xlinkHref={`sprite.svg#${project.icon}`} />
                        </svg>
                    </span>
                    <h3 className="feature__heading">{project.title}</h3>
                    <p className="feature__description">{project.description}</p>
                    <h4>Tools</h4>
                    <ul className="feature__tools span-block">
                        {project.tools.map((tool, index) => (
                            <li key={index} className="tool">{tool}</li>
                        ))}
                    </ul>
                </div>
                <div className="project__img-container">
                    <div className="project__img-wrapper">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <img
                                src="/projectsImgs/github.png"
                                alt="GitHub"
                                className="github-logo"
                            />
                        </a>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`projects_imgs/${project.webpImg}.webp 1x, projects_imgs/${project.webpImg}@2x.webp 2x`}
                            />
                            <source
                                type="image/jpg"
                                srcSet={`projects_imgs/${project.jpgImg}.jpg 1x, projects_imgs/${project.jpgImg}@2x.jpg 2x`}
                            />
                            <img
                                className="feature__img project__img"
                                src={`projects_imgs/${project.jpgImg}@2x.jpg`}
                                alt=""
                            />
                        </picture>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectContent;

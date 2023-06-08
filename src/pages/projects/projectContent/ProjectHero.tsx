import React from 'react';

interface Project {
    title: string;
    description: string;
    tools: string;
    icon: string;
    webpImg: string;
    jpgImg: string;
}

interface Props {
    project: Project;
}

const ProjectHero: React.FC<Props> = ({ project }) => {
    const { title, description, tools, icon, webpImg, jpgImg } = project;

    return (
        <section className="block container">
            <article className="grid grid--1x2 feature">
                <div className="feature__content">
                    <span className="icon-container">
                        <svg className="icon icon--primary">
                            <use xlinkHref={`sprite.svg#${icon}`} />
                        </svg>
                    </span>
                    <h3 className="feature__heading">{title}</h3>
                    <p className="feature__description">{description}</p>
                    <h4>Tools</h4>
                    <span className="feature__tools span-block">{tools}</span>
                    <a href="" className="link-arrow feature__link">
                        Learn More
                    </a>
                </div>
                <picture>
                    <source
                        type="image/webp"
                        srcSet={`projects_imgs/${webpImg}.webp 1x, projects_imgs/${webpImg}@2x.webp 2x`}
                    />
                    <source
                        type="image/jpg"
                        srcSet={`projects_imgs/${jpgImg}.jpg 1x, projects_imgs/${jpgImg}@2x.jpg 2x`}
                    />
                    <img
                        className="feature__img"
                        src={`projects_imgs/${jpgImg}@2x.jpg`}
                        alt=""
                    />
                </picture>
            </article>
        </section>
    );
};

export default ProjectHero;

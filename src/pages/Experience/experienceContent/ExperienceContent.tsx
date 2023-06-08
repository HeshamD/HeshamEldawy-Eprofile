import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../../../util/motion";
import { experiences } from './ExperienceConst';

import './ExperienceContentStyling.css';

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
    iconHeight: string;
    iconWidth: string;
}

const ExperienceCard: React.FC<Experience> = ({ title, company_name, icon, iconBg, date, points }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                padding: '1.5rem'
            }}
            contentArrowStyle={{ borderRight: "20px solid  #232631" }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={
                <div className='experienceCard__img'>
                    <img src={icon} alt={company_name} />
                </div>
            }
        >
            <header>
                <h3 className='experienceCard__title'>{title}</h3>
                <p className='experienceCard__text' >{company_name}</p>
            </header>

            <ul>
                {points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='experienceCard__listItem'>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const ExperienceContent: React.FC = () => {
    return (
        <div className="block container">
            <motion.div variants={textVariant(1)} className="block__header">
                <h2 className='content__heading'>Work Experience.</h2>
                <p className='content__text'>As a software engineer, I have gained valuable experience working on a diverse range of projects. Throughout my career, I have collaborated with cross-functional teams to develop and implement innovative software solutions. From designing scalable architectures to writing efficient and maintainable code, I am well-versed in the entire software development life cycle. I have a strong problem-solving aptitude and thrive in dynamic environments, where I can apply my analytical skills to overcome technical challenges. With a keen eye for detail and a passion for creating robust and user-friendly applications, I am committed to delivering high-quality software solutions that exceed client expectations.</p>
            </motion.div>

            <div className='experience--content'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} {...experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default ExperienceContent;

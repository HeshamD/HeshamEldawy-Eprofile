import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../../util/motion";
import degrees, { Degree } from './DegreeConst';
import './educationContentStyling.css';

const EducationCard: React.FC<Degree> = (degree: Degree) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                padding: '1rem',
            }}
            contentArrowStyle={{ borderRight: "20px solid  #232631" }}
            date={degree.date}
            iconStyle={{ background: degree.iconBg }}
            icon={
                degree.icon &&
                <div className='card__img education__img'>
                    <img src={degree.icon} alt={degree.collegeName} />
                </div>
            }
        >
            <header>
                <h3 className='card--title' id="degree__title">{degree.collegeName}</h3>
                <p className='card--text' id="degree__text" >{degree.description}</p>
            </header>

            <ul>
                {degree.courses.map((course, index) => (
                    <li key={`experience-point-${index}`} className='card__listItem'>
                        {course}
                    </li>
                ))}            </ul>
        </VerticalTimelineElement>
    );
};

const EducationContent: React.FC = () => {
    return (
        <div className="block container">
            <motion.div variants={textVariant(1)} className="block__header">
                <h2 className='content__heading'>My Education Journey</h2>
                <p className='content__text'>
                    As a dedicated software engineer, I have embarked on an enriching education journey that has equipped me with the knowledge and skills to excel in the dynamic field of technology. Throughout my studies, I have delved deep into various programming languages, frameworks, and software development methodologies. My passion for problem-solving and innovation has driven me to explore cutting-edge concepts and stay updated with the latest industry trends. With a strong foundation in computer science and a relentless drive to learn, I am committed to delivering exceptional software solutions and making a positive impact in the digital world.                </p>
            </motion.div>

            <div className='experience--content'>
                <VerticalTimeline>
                    {degrees.map((degree, index) => (
                        <EducationCard key={`experience-${index}`} {...degree} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default EducationContent
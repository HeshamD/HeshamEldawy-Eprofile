import React from 'react'
import LineBreaker from '../../lineBreaker/LineBreaker'
import './HomeProjectStyling.css'
import ProjectContents from './ProjectContents/ProjectContents'
const HomeProject = () => {
    return (
        <section className="block project">
            <LineBreaker title={'Latest Projects'} aText={'View all updates'} aLink='/projects' />
            <ProjectContents />
        </section >
    )
}
export default HomeProject
import React from 'react'
import LineBreaker from '../../../../components/lineBreaker/LineBreaker'
import ProjectContents from './projectContents/ProjectContents'
const HomeProject = () => {
    return (
        <section className="block project">
            <LineBreaker title={'Latest Projects'} aText={'View all updates'} aLink='/projects' />
            <ProjectContents />
        </section >
    )
}
export default HomeProject
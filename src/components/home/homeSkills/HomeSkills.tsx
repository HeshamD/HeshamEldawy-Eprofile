import React from 'react'
import LineBreaker from '../../lineBreaker/LineBreaker'
import SkillsContent from './skillsContent/SkillsContent'

const HomeSkills = () => {
    return (
        <section className="block skills" id='skills'>
            <LineBreaker title={'Technical Skills'} aText={'Learn more'} aLink={'#skills'} />
            <SkillsContent />
        </section>
    )
}

export default HomeSkills
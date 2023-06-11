import MainHeader from '../../components/header/MainHeader';
import ProjectContent from './ProjectContent';
import projects, { Project } from './ProjectConst';

const ProjectModel = () => {
    return (
        <>
            <MainHeader />
            <div className='box'>
                {projects.map((project, index) => (
                    <ProjectContent key={index} {...project} />
                ))}
            </div>
        </>
    );
};



export default ProjectModel
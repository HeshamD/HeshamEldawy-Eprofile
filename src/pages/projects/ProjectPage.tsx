import MainHeader from '../../components/header/MainHeader';
import ProjectHero from './projectContent/ProjectHero';
import './projectPageStyling.css';

const ProjectPage = () => {

    const projects = [
        {
            title: 'Translation Office',
            description:
                `Translation Office is a Web Application created using the React.js framework for the frontend and Node.js for the backend.This project aims to provide a platform where users can easily translate their documents into different languages which it's certified translation. `,
            tools: 'Javascript, React.js, Html, CSS, Node.js',
            icon: 'easy',
            webpImg: 'easy',
            jpgImg: 'easy',
        },
        {
            title: 'Translation Office',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita ea voluptate dolores libero reiciendis nemo ut at sit reprehenderit!',
            tools: 'Java',
            icon: 'easy',
            webpImg: 'easy',
            jpgImg: 'easy',
        },
        {
            title: 'Translation Office',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita ea voluptate dolores libero reiciendis nemo ut at sit reprehenderit!',
            tools: 'Java',
            icon: 'easy',
            webpImg: 'easy',
            jpgImg: 'easy',
        },
    ];


    return (
        <>
            <MainHeader />
            <div className='box'>
                {projects.map((project, index) => (
                    <ProjectHero key={index} project={project} />
                ))}
            </div>
        </>
    );
};



export default ProjectPage
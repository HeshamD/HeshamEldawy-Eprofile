export interface Project {
    title: string;
    projectType: string;
    projectDesc: string;
    projectImg: string;
    projectDevice: string;
    ProjectDeviceClass: string;
    ProjectImgClass: string;
}

const projects: Project[] = [
    {
        title: "Translation office Services",
        projectType: "phone",
        projectDesc: `Translation Office is a Web Application created using the React.js framework for the frontend and Node.js for the backend.
        This project aims to provide a platform where users can easily translate their documents into different languages,
        which are certified translations.`,
        projectImg: "home/mainImgs/translation.png",
        projectDevice: "home/mainImgs/phone.png",
        ProjectDeviceClass: "phoneScreen",
        ProjectImgClass: "phoneApp"
    },
    {
        title: "Online Fitness Coaching",
        projectType: "laptop",
        projectDesc: `Online fitness coaching is a growing industry that allows fitness professionals to provide personalized coaching and guidance to clients remotely.`,
        projectImg: "home/mainImgs/fitness.png",
        projectDevice: "home/mainImgs/laptop.png",
        ProjectDeviceClass: "laptopScreen",
        ProjectImgClass: "laptopApp"

    }
];

export default projects;

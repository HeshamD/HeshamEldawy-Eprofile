export interface Project {
    title: string;
    description: string;
    tools: string[];
    icon: string;
    webpImg: string;
    jpgImg: string;
    githubLink: string;
}

const projects: Project[] = [
    {
        title: 'Translation Office Services',
        description:
            'Translation Office is a Web Application created using the React.js framework for the frontend and Node.js for the backend. This project aims to provide a platform where users can easily translate their documents into different languages, which are certified translations.',
        tools: ['Javascript', 'React.js', 'Html', 'CSS', 'Node.js'],
        icon: 'computer',
        webpImg: 'easy',
        jpgImg: 'easy',
        githubLink: 'https://github.com/your-github-link'
    },
    {
        title: 'Expense Tracker',
        description:
            'Create an expense tracking application that allows users to record and categorize their expenses, set budgets, and generate expense reports. Include features like expense visualization, reminders, and data synchronization across devices.',
        tools: ['JS', 'TS', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js'],
        icon: 'computer',
        webpImg: 'easy',
        jpgImg: 'easy',
        githubLink: 'https://github.com/your-github-link'
    }
];

export default projects;
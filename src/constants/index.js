import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
   
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Engineer (Tech Lead)",
        company_name: "Tata Consultancy Services (meta)",
        icon: meta, // Replace 'meta' with your meta logo path
        iconBg: "#fbc3bc",
        date: "Feb 2022 – Present",
        points: [
            "Managing AI-driven merchandising automation and daily operations for Microsoft Teams App Store.",
            "Developed an AI app classification agent using React, C#, and Azure OpenAI to automate app categorization.",
            "Built an AI-powered search bot using RAG methodology and vectorized DB for NLP-based app discovery.",
            "Created an industry analysis tool for web scraping using Playwright and Power BI for data visualization.",
            "Developed internal automation tools using React and C# to streamline data retrieval and merchandising decisions."
        ],
    },
    {
        title: "Software Developer",
        company_name: "Teclx Technologies Pvt Ltd",
        icon: meta, // Replace 'teclx' with your Teclx logo path
        iconBg: "#b7e4c7",
        date: "Feb 2021 – Aug 2021",
        points: [
            "Developed UI for an Inventory Manager System (IMS) for admins managing accommodations.",
            "Built a Python-based backend to generate QR codes linked to inventory data.",
            "Designed a robust UI for efficient data handling and a user-friendly experience."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Parcss Systems Pvt Ltd",
        icon: meta, // Replace 'parcss' with your Parcss logo path
        iconBg: "#accbe1",
        date: "Apr 2020 – Jan 2021",
        points: [
            "Built and enhanced video calling web applications using Angular 10 with Python backend.",
            "Integrated Twilio services for seamless video calling functionality.",
            "Conducted front-end testing and resolved cross-browser compatibility issues."
        ],
    },
    {
        title: "HR Technical Associate",
        company_name: "Amazon Development Centre (I) Pvt Ltd",
        icon: meta, // Replace 'amazon' with your Amazon logo path
        iconBg: "#a2d2ff",
        date: "Sep 2019 – Feb 2020",
        points: [
            "Managed employee timekeeping processes and resolved payroll discrepancies.",
            "Collaborated with cross-functional teams to meet operational SLAs."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SrivatsavPrayaga',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saisrivatsava-prayaga-b62457293/',
    }
];
export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'AI App Classification Agent',
        description: 'Built an AI-powered app classification tool using React, C#, and Azure OpenAI to automate categorization based on key features and use cases.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'XML Programming Tool',
        description: 'Developed an XML generation tool in C# to automate the formatting of app data, enabling seamless pipeline integration for merchandising workflows.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'AI-Powered Search Bot',
        description: 'Implemented a "Chat with Data" bot using Azure AI Studio and RAG methodology to help analyze Microsoft Teams App data through NLP-driven search.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Industry Analysis Web Scraper',
        description: 'Designed a web scraping tool using Playwright and C# to extract market data, storing results in Azure SQL and visualizing insights via Power BI.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Internal Process Automation Tool',
        description: 'Developed an automation tool using React and C# to retrieve Microsoft Teams App merchandising data, integrating Graph API and Power BI connectors.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Inventory Management System (IMS)',
        description: 'Created a QR-based inventory tracking system with a Python backend and React UI, improving accommodation management for admins.',
     link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-purple',
        name: 'Video Calling Web Application',
        description: 'Enhanced video calling UI using Angular 10, integrated with a Python backend and Twilio services to optimize real-time communication.',
       link: 'your_project_link_here',
    }
];
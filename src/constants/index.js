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
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: nodejs,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "C# / .NET",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "Azure OpenAI",
        type: "AI",
    },
    {
        imageUrl: css,
        name: "Copilot Studio",
        type: "AI Platform",
    },
    {
        imageUrl: git,
        name: "Power Automate",
        type: "Automation",
    },
    {
        imageUrl: github,
        name: "Power Platform",
        type: "Platform",
    },
    {
        imageUrl: mongodb,
        name: "Fabric Data Agents",
        type: "AI",
    },
    {
        imageUrl: motion,
        name: "REST APIs",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "RAG Workflows",
        type: "AI",
    },
    {
        imageUrl: nextjs,
        name: "Azure Cloud",
        type: "Cloud",
    },
    {
        imageUrl: redux,
        name: "Agentic AI",
        type: "AI",
    },
    {
        imageUrl: sass,
        name: "Generative AI",
        type: "AI",
    },
    {
        imageUrl: tailwindcss,
        name: "SharePoint",
        type: "Enterprise",
    }
];

export const experiences = [
    {
        title: "Senior Digital Engineer | Agentic AI",
        company_name: "Sonata Software | Microsoft",
        icon: meta,
        iconBg: "#0078d4",
        date: "Sep 2025 – Present",
        points: [
            "Built and deployed AI agents and copilots using Copilot Studio and Microsoft Fabric Data Agents.",
            "Rapidly developed AI proof-of-concepts and business automation solutions for Microsoft stakeholders.",
            "Integrated AI solutions with enterprise reporting systems, Power BI semantic models, and Microsoft data platforms.",
            "Designed agentic workflows using Copilot Studio, Power Automate, and RAG-based architectures.",
            "Worked across Azure AML-Runners, Vienna, and RAG workflows handling configuration and troubleshooting.",
            "Built and refined Copilot/Fabric Data Agents for Microsoft EMEA analytics, aligning AI outputs with Power BI semantic models.",
            "Troubleshot enterprise blockers including DLP restrictions, HTTP action limits, and SharePoint permissions.",
            "Collaborated with Microsoft and Sonata stakeholders on agentic AI, Power BI validation, and Excel automation."
        ],
    },
    {
        title: "IT Analyst",
        company_name: "Tata Consultancy Services | Microsoft",
        icon: meta,
        iconBg: "#fbc3bc",
        date: "Feb 2022 – Jun 2025",
        points: [
            "Designed and developed enterprise AI solutions leveraging Azure OpenAI Services and GPT-based LLMs.",
            "Built and enhanced Copilot Studio applications and conversational AI experiences for Microsoft business stakeholders.",
            "Developed ASP.NET/C# web applications and REST APIs integrated with Azure services and AI capabilities.",
            "Implemented Power Automate workflows to automate business processes and orchestrate end-to-end workflow execution.",
            "Built AI-powered recommendation solutions that evaluated business criteria and suggested eligible opportunities.",
            "Integrated enterprise applications with Azure OpenAI and backend systems enabling intelligent automation.",
            "Developed scalable backend services using Python, C#, .NET ensuring enterprise-grade reliability.",
            "Contributed to AI adoption initiatives by delivering low-code and pro-code solutions using Power Platform."
        ],
    },
    {
        title: "Software Developer",
        company_name: "Teclx Technologies Pvt Ltd",
        icon: meta,
        iconBg: "#b7e4c7",
        date: "Feb 2021 – Aug 2021",
        points: [
            "Developed a QR-based inventory management system enhancing security, accessibility, and real-time tracking.",
            "Designed intuitive UI for seamless navigation and structured data handling processes.",
            "Integrated Python-based backend solutions to optimize inventory workflows and C# APIs for secure authentication.",
            "Streamlined inventory tracking, automation, and user accessibility making systems more efficient and scalable."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Parcss Systems Pvt Ltd",
        icon: meta,
        iconBg: "#accbe1",
        date: "Apr 2020 – Jan 2021",
        points: [
            "Contributed to end-to-end development using Angular 10 and Python focusing on enhancing user experience.",
            "Contributed to a video calling web application integrating Twilio services for seamless real-time communication.",
            "Optimized UI performance, resolved cross-browser compatibility issues ensuring smooth user experience.",
            "Utilized Python-based backend solutions to manage data flow and improve API efficiency."
        ],
    },
    {
        title: "Technical Associate",
        company_name: "Amazon Development Centre (I) Pvt Ltd",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Sep 2019 – Mar 2020",
        points: [
            "Worked with HR operational tools including Lenel and Timekeeper ensuring accurate timekeeping and payroll processing.",
            "Managed attendance tracking, resolved discrepancies while maintaining operational efficiency and compliance standards.",
            "Collaborated with cross-functional teams to enhance automation processes and streamline HR workflows.",
            "Supported payroll integrity across systems ensuring seamless employee management."
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
        name: 'Copilot Studio AI Agent',
        description: 'Built and deployed AI agents using Copilot Studio and Microsoft Fabric Data Agents for Microsoft business stakeholders. Integrated with Power BI semantic models for enterprise analytics.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Azure OpenAI Integration',
        description: 'Designed enterprise AI solutions leveraging Azure OpenAI Services and GPT-based LLMs. Developed ASP.NET/C# APIs integrated with Azure services enabling intelligent automation workflows.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Power Automate Workflows',
        description: 'Implemented Power Automate workflows automating business processes and orchestrating end-to-end workflow execution. Built AI-powered recommendation solutions for Microsoft teams.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Fabric Data Agents',
        description: 'Built and refined Copilot/Fabric Data Agents for Microsoft EMEA analytics. Aligned AI outputs with Power BI semantic models, DAX logic, and enterprise reporting systems.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'RAG-Based Search Bot',
        description: 'Implemented AI-powered search solutions using RAG methodology and Azure AI Studio. Designed agentic workflows with Copilot Studio for NLP-driven data discovery and analysis.',
        link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Enterprise Automation Tool',
        description: 'Developed enterprise automation using React and C# integrating Graph API and Power BI connectors. Troubleshot DLP restrictions, HTTP limits, and SharePoint permissions at scale.',
     link: 'your_project_link_here',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-purple',
        name: 'QR Inventory System',
        description: 'Created QR-based inventory management system with Python backend and React UI. Integrated C# APIs for secure authentication and real-time tracking.',
       link: 'your_project_link_here',
    }
];
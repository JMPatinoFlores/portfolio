import { ProjectProps } from "@/_interfaces/interfaces";
import {
    Cloud,
    Code,
    Component,
    Hexagon,
    Layers,
    Move,
    Server,
    Terminal,
    TextCursor,
    Wind,
} from "lucide-react";

export const projects: ProjectProps[] = [
    {
        title: "MeteorCloud",
        description:
            "Frontend development for a production multi-tenant ERP/CRM system used in production by a distribution company. Implemented complex data tables, role-based views, dashboards with analytics, and full CRUD workflows. Built with Next.js and TypeScript, integrating with backend services written in Go.",
        tools: [
            {
                icon: Layers,
                label: "Next.js",
            },
            {
                icon: Code,
                label: "Typescript",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Component,
                label: "shadcn",
            },
            {
                icon: Cloud,
                label: "AWS S3",
            },
            {
                icon: Terminal,
                label: "Golang",
            },
            {
                icon: TextCursor,
                label: "Tiptap",
            },
            {
                icon: Move,
                label: "Dnd kit",
            },
        ],
        repo: "#",
        image: "/meteorcloud.png",
    },
    {
        title: "VitalPet",
        description:
            "Full-stack veterinary management system with role-based access, appointment scheduling, and medical records. Developed using Next.js, Express, and AWS S3, focusing on scalable frontend architecture and real-world application patterns.",
        tools: [
            {
                icon: Layers,
                label: "Next.js",
            },
            {
                icon: Code,
                label: "Typescript",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Component,
                label: "shadcn",
            },
            {
                icon: Cloud,
                label: "AWS S3",
            },
            {
                icon: Server,
                label: "Express.js",
            },
        ],
        repo: "#",
        link: "#",
        image: "/vitalpet.png",
    },
    {
        title: "Ruta Viajera",
        description:
            "Hotel booking platform with user authentication, reservations, and interactive maps showing travel routes and nearby attractions. Developed the frontend using Next.js and integrated with an existing backend API, focusing on user experience and dynamic interfaces.",
        tools: [
            {
                icon: Layers,
                label: "Next.js",
            },
            {
                icon: Code,
                label: "Typescript",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Cloud,
                label: "Cloudinary",
            },
            {
                icon: Hexagon,
                label: "Nest.js",
            },
        ],
        repo: "#",
        link: "https://rutaviajera.vercel.app/",
        image: "/rutaviajera.png",
    },
    {
        title: "Trendy Treasures",
        description:
            "E-commerce frontend featuring product browsing, authentication, shopping cart, and wishlist functionality. Built with Next.js and TailwindCSS, focusing on state management and responsive UI.",
        tools: [
            {
                icon: Layers,
                label: "Next.js",
            },
            {
                icon: Code,
                label: "Typescript",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Cloud,
                label: "Cloudinary",
            },
            {
                icon: Server,
                label: "Express.js",
            },
        ],
        repo: "#",
        link: "https://trendy-treasures-ec.vercel.app/",
        image: "/trendytreasures.png",
    },
    {
        title: "J&Y Web Studio",
        description:
            "Business website created to offer landing page services for small and medium-sized companies. Integrated Stripe for payments and EmailJS for contact automation, focusing on responsive design and modern user experience.",
        tools: [
            {
                icon: Layers,
                label: "Next.js",
            },
            {
                icon: Code,
                label: "Typescript",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
        ],
        repo: "#",
        link: "https://www.jywebstudio.com/",
        image: "/jywebstudio.png",
    },
];

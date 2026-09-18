import { ProjectProps } from "@/_interfaces/interfaces";
import {
    Cloud,
    Code,
    Component,
    Container,
    Database,
    DatabaseZap,
    Github,
    Hexagon,
    Layers,
    Server,
    Terminal,
    Wind,
} from "lucide-react";

export const projects: ProjectProps[] = [
    {
        key: "meteorCloud",
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
                icon: Terminal,
                label: "Golang",
            },
            {
                icon: Database,
                label: "PostgreSQL",
            },
            {
                icon: Cloud,
                label: "AWS",
            },
            {
                icon: Container,
                label: "Docker",
            },
            {
                icon: Github,
                label: "Git & GitHub",
            },
        ],
        link: "https://www.meteorcloud.net/",
        image: "/projects-screenshots/dashboard-meteorcloud.png",
        images: [
            "/projects-screenshots/login-meteorcloud.png",
            "/projects-screenshots/dashboard-meteorcloud.png",
            "/projects-screenshots/sidebar-meteorcloud.png",
            "/projects-screenshots/access-portal-meteorcloud.png",
            "/projects-screenshots/order-details-meteorcloud.png",
            "/projects-screenshots/add-form-meteorcloud.png",
            "/projects-screenshots/import-csv-meteorcloud.png",
            "/projects-screenshots/custom-fields-meteorcloud.png",
            "/projects-screenshots/document-editor-meteorcloud.png",
            "/projects-screenshots/appareance-meteorcloud.png",
        ],
    },
    {
        key: "galoo",
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
                icon: Server,
                label: "Express.js",
            },
            {
                icon: Hexagon,
                label: "TypeORM",
            },
            {
                icon: Database,
                label: "PostgreSQL",
            },
            {
                icon: DatabaseZap,
                label: "Supabase",
            },
            {
                icon: Cloud,
                label: "AWS",
            },
            {
                icon: Github,
                label: "Git & GitHub",
            },
        ],
        link: "https://www.galoo.pet/",
        image: "/projects-screenshots/landing-galoo.png",
        images: [
            "/projects-screenshots/landing-galoo.png",
            "/projects-screenshots/dashboard-galoo.png",
            "/projects-screenshots/patients-galoo.png",
            "/projects-screenshots/medical-record-galoo.png",
            "/projects-screenshots/vaccinations-galoo.png",
            "/projects-screenshots/add-vaccination-galoo.png",
            "/projects-screenshots/shedule-galoo.png",
            "/projects-screenshots/customers-galoo.png",
            "/projects-screenshots/carnet-galoo.png",
            "/projects-screenshots/clinics-galoo.png",
            "/projects-screenshots/settings-galoo.png",
        ],
    },
    {
        key: "rutaViajera",
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
                icon: Hexagon,
                label: "Nest.js",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Cloud,
                label: "Cloudinary",
            },
        ],
        repo: "https://github.com/JMPatinoFlores/PM4FE-JMPatinoFlores",
        image: "/rutaviajera.png",
    },
    {
        key: "trendyTreasures",
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
                icon: Server,
                label: "Express.js",
            },
            {
                icon: Wind,
                label: "TailwindCSS",
            },
            {
                icon: Cloud,
                label: "Cloudinary",
            },
        ],
        link: "https://trendy-treasures-ec.vercel.app/",
        image: "/trendytreasures.png",
    },
    {
        key: "jyWebStudio",
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
        repo: "https://github.com/JMPatinoFlores/jywebstudio",
        link: "https://jywebstudio.vercel.app/",
        image: "/jywebstudio.png",
    },
];

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
        link: "https://www.meteorcloud.net/",
        image: "/meteorcloud.png",
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
                icon: Cloud,
                label: "AWS S3",
            },
            {
                icon: Server,
                label: "Express.js",
            },
        ],
        link: "https://www.galoo.pet/",
        image: "/vitalpet.png",
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

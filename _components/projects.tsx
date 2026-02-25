"use client";

import { projects } from "@/_contstants/projects";
import { ProjectCard } from "./project-card";
import Image from "next/image";
import { Sparkle } from "lucide-react";

export const Projects = () => {
    return (
        <section
            className="relative md:text-2xl md:scroll-mt-16 scroll-mt-12 px-5"
            id="projects"
        >
            <Image
                src="/cat-3.png"
                alt="Cat"
                width={500}
                height={500}
                className="absolute top-60 md:-right-40 right-0 opacity-60 hover:opacity-80 transition transform scale-x-[-1]"
            />
            <Image
                src="/planet-2.png"
                alt="Planet"
                width={150}
                height={150}
                className="absolute top-180 md:-right-20 right-0 opacity-60 hover:opacity-80 transition duration-500"
            />
            <Image
                src="/planet-4.png"
                alt="Planet"
                width={150}
                height={150}
                className="absolute bottom-50 md:-right-15 right-0 opacity-60 hover:opacity-80 transition duration-500"
            />
            <Sparkle className="absolute top-40 right-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute top-50 left-0 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-30 right-100 opacity-20 hover:opacity-40 transition" />
            <div className="-z-10 md:h-96 md:w-96 h-60 w-60 absolute bg-blue-600/20 rounded-full blur-[150px] -left-10 top-20" />
            <div className="-z-10 md:h-96 md:w-96 h-60 w-60 absolute bg-cyan-400/20 rounded-full blur-[150px] md:-right-40 right-0 bottom-20" />
            <div className="-z-10 md:h-80 md:w-80 h-40 w-40 absolute bg-pink-500/20 rounded-full blur-[140px] left-1/4 top-1/3" />
            <div className="-z-10 h-112 md:w-md w-60 absolute bg-teal-400/20 rounded-full blur-[180px] -top-20 left-1/4" />
            <div className="flex items-center gap-5 mb-5">
                <h2 className="text-4xl font-semibold">Projects</h2>
                <div className="grow border-t border-white" />
            </div>
            <p className="mb-10">
                Built while others slept. Each project a small victory against
                the darkness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
};

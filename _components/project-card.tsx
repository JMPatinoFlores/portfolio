"use client";

import { ProjectProps } from "@/_interfaces/interfaces";
import { Github, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const [imgSrc, setImgSrc] = useState(
        project.image || "/image-placeholder-2.png",
    );
    return (
        <div className="group rounded-xl w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xs overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all hover:-translate-y-1 duration-500">
            <div className="w-full md:h-60 h-44 shrink-0 overflow-hidden group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                <Image
                    src={imgSrc}
                    alt={project.title}
                    fill
                    onError={() => setImgSrc("/image-placeholder-2.png")}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-5 flex flex-col h-full md:gap-5 gap-2">
                <h3 className="font-semibold md:text-2xl text-lg">
                    {project.title}
                </h3>
                <p className="md:text-sm text-xs max-w-prose text-white/80">
                    {project.description}
                </p>
                <div className="flex items-center md:gap-3 gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                        <span
                            key={tool.label}
                            className="md:text-xs text-[8px] md:py-1 md:px-3 py-0.5 px-1.5 flex items-center md:gap-3 gap-1 rounded-full bg-pink-400/20 border border-pink-500"
                        >
                            <tool.icon className="size-3 md:size-5" />
                            <span>{tool.label}</span>
                        </span>
                    ))}
                </div>
                <hr className="mt-auto" />
                <div className="flex items-center md:gap-5 gap-2">
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.repo}
                        className="w-full border border-white md:text-lg flex items-center justify-center rounded-lg md:py-2 py-1 gap-2 hover:bg-white/5 transition-colors"
                    >
                        <Github className="size-4 md:size-5" /> Code
                    </Link>
                    {project.link && (
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.link || "#"}
                            className="w-full border border-white md:text-lg flex items-center justify-center rounded-lg md:py-2 py-1 gap-2 hover:bg-white/5 transition-colors"
                        >
                            <LinkIcon className="size-4 md:size-5" /> Live
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

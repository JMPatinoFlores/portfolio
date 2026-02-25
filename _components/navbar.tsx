"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Code, Folder, IdCard, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        const handleHash = () => {
            setHash(window.location.hash);
        };

        handleHash();

        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    const navLinks = [
        {
            label: "Skills",
            link: "#skills",
            icon: Code,
        },
        {
            label: "Projects",
            link: "#projects",
            icon: Folder,
        },
        {
            label: "About",
            link: "#about",
            icon: IdCard,
        },
        {
            label: "Contact",
            link: "#contact",
            icon: Mail,
        },
    ];

    return (
        <nav className="flex justify-between md:h-16 h-12 items-center md:px-20 px-5 font-semibold text-gray-300 bg-white/5 backdrop-blur-md fixed top-0 right-0 left-0 z-20">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="group size-8 md:hidden"
                        size="icon"
                        variant="ghost"
                    >
                        <svg
                            className="pointer-events-none"
                            fill="none"
                            height={16}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width={16}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                                d="M4 12L20 12"
                            />
                            <path
                                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                d="M4 12H20"
                            />
                            <path
                                className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                                d="M4 12H20"
                            />
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="bg-white/5 backdrop-blur-md w-40"
                    align="end"
                >
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.link}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
            <Link
                href="#hero"
                className="transition-colors duration-500 drop-shadow-xl text-muted-foreground hover:drop-shadow-white hover:text-white"
            >
                JessiOwe
            </Link>
            <ul className="md:flex gap-5 hidden">
                {navLinks.map((link) => {
                    const isActive = hash === link.link;
                    return (
                        <li
                            key={link.label}
                            className={`transition-colors duration-500 drop-shadow-xl ${
                                isActive
                                    ? "text-white drop-shadow-xl drop-shadow-white"
                                    : "text-muted-foreground hover:drop-shadow-white hover:text-white"
                            }`}
                        >
                            <Link
                                href={link.link}
                                onClick={() => setHash(link.link)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

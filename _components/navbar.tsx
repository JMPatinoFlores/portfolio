"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Code, Folder, Home, IdCard, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { LocaleSwitcher } from "./locale-switcher";

export const Navbar = () => {
    const t = useTranslations("Nav");

    const navLinks = [
        {
            label: t("home"),
            link: "#",
            icon: Home,
        },
        {
            label: t("skills"),
            link: "#skills",
            icon: Code,
        },
        {
            label: t("projects"),
            link: "#projects",
            icon: Folder,
        },
        {
            label: t("about"),
            link: "#about",
            icon: IdCard,
        },
    ];

    return (
        <nav className="fixed top-10 inset-x-0 z-50 px-5 md:px-0">
            <div className="flex justify-end md:hidden">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            className="group size-10 rounded-full border border-white/10 bg-background/50 backdrop-blur-md shadow-lg shadow-white/10"
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
                            <li>
                                <LocaleSwitcher inMenu />
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="hidden md:flex md:justify-center">
                <div className="rounded-full border border-white/10 bg-background/50 px-2 py-1.5 backdrop-blur-md shadow-lg shadow-white/10">
                    <ul className="flex items-center gap-2">
                        {navLinks.map((link) => {
                            return (
                                <li
                                    key={link.label}
                                    className="flex items-center"
                                >
                                    <Link
                                        href={link.link}
                                        className={cn(
                                            "flex items-center gap-2 relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-500",

                                            // línea inferior
                                            "before:absolute before:left-1/2 before:bottom-px",
                                            "before:h-px before:w-0 before:-translate-x-1/2",
                                            "before:rounded-full",
                                            "before:opacity-80",
                                            "before:bg-[linear-gradient(90deg,transparent,var(--color-1),var(--color-5),var(--color-3),transparent)]",
                                            "before:blur-[0.5px]",
                                            "before:transition-all before:duration-300",
                                            "hover:before:w-3/4",

                                            // glow
                                            "after:absolute after:left-1/2 after:-bottom-1.5",
                                            "after:h-2 after:w-0 after:-translate-x-1/2",
                                            "after:rounded-full",
                                            "after:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
                                            "after:blur-md after:opacity-0",
                                            "after:transition-all after:duration-300",

                                            "hover:after:w-3/4 hover:after:opacity-100",

                                            // animación rainbow
                                            "hover:bg-size-[200%]",
                                            "after:bg-size-[200%]",
                                            "hover:animate-rainbow",
                                            "after:animate-rainbow",
                                        )}
                                    >
                                        <link.icon className="size-4" />{" "}
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <div className="w-px h-4 bg-white/20 mx-2" />
                        <li className="flex items-center">
                            <LocaleSwitcher />
                        </li>
                        <li className="flex items-center">
                            <Link
                                href="#contact"
                                className={cn(
                                    "flex items-center gap-2 relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-500 text-background bg-white",

                                    // glow
                                    "after:absolute after:left-1/2 after:-bottom-1.5",
                                    "after:h-2 after:w-0 after:-translate-x-1/2",
                                    "after:rounded-full",
                                    "after:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
                                    "after:blur-md after:opacity-0",
                                    "after:transition-all after:duration-300",

                                    "hover:after:w-3/4 hover:after:opacity-100",

                                    // animación rainbow
                                    "hover:bg-size-[200%]",
                                    "after:bg-size-[200%]",
                                    "hover:animate-rainbow",
                                    "after:animate-rainbow",
                                )}
                            >
                                <Mail className="size-4" /> {t("contact")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

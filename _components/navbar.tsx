import { Code, Folder, IdCard, Mail } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const navLinks = [
        {
            label: "About",
            link: "#about",
            icon: IdCard,
        },
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
            label: "Contact",
            link: "#contact",
            icon: Mail,
        },
    ];

    return (
        <nav className="flex justify-between h-16 items-center px-20 font-semibold text-gray-300 bg-white/5 backdrop-blur-md fixed top-0 right-0 left-0 z-20">
            <Link href="#hero">JessiOwe</Link>
            <ul className="flex gap-5">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link href={link.link}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

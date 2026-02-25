import { RainbowButton } from "@/components/ui/rainbow-button";
import { Github, Linkedin, Mail, Sparkle, Twitch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Contact = () => {
    return (
        <section
            className="relative md:text-2xl md:scroll-mt-16 scroll-mt-12 p-5 md:min-h-[70vh] flex flex-col"
            id="contact"
        >
            <div className="-z-10 h-96 w-96 absolute bg-purple-600/20 rounded-full blur-[150px] -left-32 top-40" />
            <div className="-z-10 h-96 w-96 absolute bg-blue-600/20 rounded-full blur-[150px] right-20 top-10" />
            <div className="-z-10 h-96 w-96 absolute bg-cyan-400/20 rounded-full blur-[150px] md:-right-40 right-0 bottom-20" />
            <Sparkle className="absolute top-40 left-50 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-50 left-15 opacity-20 hover:opacity-40 transition" />
            <Image
                src="/cat-5.png"
                alt="Cat"
                width={300}
                height={300}
                className="absolute md:bottom-30 top-0 md:top-auto md:right-10 right-0 opacity-60 hover:opacity-80 transition transform scale-x-[-1] duration-500"
            />
            <Image
                src="/cat-2.png"
                alt="Cat"
                width={300}
                height={300}
                className="absolute -bottom-13 md:left-0 -left-20 opacity-60 hover:opacity-80 transition transform scale-x-[-1] duration-500"
            />
            <div className="flex gap-5 items-center mb-5">
                <div className="grow border-t border-white" />
                <h2 className="text-4xl font-semibold">Contact</h2>
                <div className="grow border-t border-white" />
            </div>
            <div className="flex flex-col items-center justify-center text-center grow gap-5 max-w-2xl mx-auto">
                <h3>
                    The night is ending, but I’m always open to new
                    opportunities.
                </h3>
                <p>
                    If you’re looking for a frontend developer or have a project
                    in mind, let’s talk.
                </p>
                <p className="mb-16">
                    Available for frontend positions and freelance projects.
                </p>
                <RainbowButton asChild variant="outline" size="lg">
                    <Link href="mailto:jessi_flo@live.com.mx">
                        <Mail />
                        Get in touch
                    </Link>
                </RainbowButton>
                <p className="text-sm text-white/60 mt-3">
                    jessi_flo@live.com.mx
                </p>
                <div className="flex items-center gap-5 pt-5">
                    <Link
                        href="https://github.com/JMPatinoFlores/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-400 transition-all"
                    >
                        <Github />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/jessica-patino-flores/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-400 transition-all"
                    >
                        <Linkedin />
                    </Link>
                    <Link
                        href="https://www.twitch.tv/jessiowe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-400 transition-all"
                    >
                        <Twitch />
                    </Link>
                </div>
            </div>
        </section>
    );
};

import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Github, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative mt-16 py-5 scroll-mt-16 text-xl" id="hero">
            <Image
                src="/planet-1.png"
                alt="Planet"
                width={300}
                height={300}
                className="absolute top-10 -left-50 z-10 opacity-60 hover:opacity-80 transition"
            />
            <Sparkle className="absolute top-40 right-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Image
                src="/planet-2.png"
                alt="Planet"
                width={50}
                height={50}
                className="absolute bottom-50 right-10 z-10 opacity-60 hover:opacity-80 transition"
            />
            <div className="-z-10 h-96 w-96 absolute bg-purple-600/20 rounded-full blur-[150px] -left-32 top-40" />
            <div className="-z-10 h-96 w-96 absolute bg-blue-600/20 rounded-full blur-[150px] right-20 top-10" />
            <div className="-z-10 h-96 w-96 absolute bg-cyan-400/20 rounded-full blur-[150px] -right-40 bottom-20" />
            <div className="-z-10 h-80 w-80 absolute bg-pink-500/20 rounded-full blur-[140px] left-1/4 top-1/3" />
            <div className="-z-10 h-64 w-64 absolute bg-violet-500/20 rounded-full blur-[120px] right-1/3 bottom-32" />
            <div className="-z-10 h-112 w-md absolute bg-teal-400/20 rounded-full blur-[180px] -top-20 left-1/4" />

            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-5">
                <div className="text-center">
                    <TypingAnimation>{"// Jessica Patiño"}</TypingAnimation>
                    <h1 className="text-8xl font-bold">Frontend Developer</h1>
                </div>
                <p className="italic">Building interfaces after dark</p>
                <p className="max-w-lg text-center">
                    Specialized in React and Next.js, building scalable and
                    production-ready applications.
                </p>
                <div className="flex gap-5 items-center">
                    <RainbowButton asChild size="lg">
                        <Link href="#projects">View Projects</Link>
                    </RainbowButton>
                    <RainbowButton asChild variant="outline" size="lg">
                        <Link href="https://github.com/JMPatinoFlores/">
                            <Github /> Github
                        </Link>
                    </RainbowButton>
                </div>
                <p className="text-sm text-white/70 mt-4">
                    Available for remote work • Mexico
                </p>
            </div>
        </section>
    );
};

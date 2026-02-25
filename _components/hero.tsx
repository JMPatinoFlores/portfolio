import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Github, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section
            className="relative mt-16 py-5 md:scroll-mt-16 scroll-mt-12 text-xl p-5"
            id="hero"
        >
            <Image
                src="/planet-1.png"
                alt="Planet"
                width={300}
                height={300}
                className="absolute md:top-10 -top-30 md:-left-50 left-0 opacity-60 hover:opacity-80 transition"
            />
            <Sparkle className="absolute top-40 right-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Image
                src="/planet-2.png"
                alt="Planet"
                width={50}
                height={50}
                className="absolute bottom-50 right-10 -z-10 opacity-60 hover:opacity-80 transition"
            />
            <div className="-z-20 md:h-96 md:w-96 h-60 w-60 absolute bg-purple-600/20 rounded-full blur-[150px] -left-32 top-40" />
            <div className="-z-20 md:h-96 md:w-96 h-60 w-60 absolute bg-blue-600/20 rounded-full blur-[150px] right-20 top-10" />
            <div className="-z-20 md:h-96 md:w-96 h-60 w-60 absolute bg-cyan-400/20 rounded-full blur-[150px] md:-right-40 right-0 bottom-20" />
            <div className="-z-20 md:h-80 md:w-80 h-40 w-40 absolute bg-pink-500/20 rounded-full blur-[140px] left-1/4 top-1/3" />
            <div className="-z-20 h-64 w-64 absolute bg-violet-500/20 rounded-full blur-[120px] right-1/3 bottom-32" />
            <div className="-z-20 h-112 md:w-md w-60 absolute bg-teal-400/20 rounded-full blur-[180px] -top-20 left-1/4" />

            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-5">
                <div className="text-center">
                    <TypingAnimation className="text-sm md:text-base">
                        {"// Jessica Patiño"}
                    </TypingAnimation>
                    <h1 className="md:text-8xl text-5xl font-bold text-shadow-[0_5px_25px_rgb(0_0_0/0.25)] text-shadow-white/50">
                        Frontend Developer
                    </h1>
                </div>
                <p className="italic text-sm md:text-base">
                    Building interfaces after dark
                </p>
                <p className="md:max-w-lg max-w-xs text-lg md:text-base text-center">
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

import { skills } from "@/_contstants/skills";
import { ShineBorder } from "@/components/ui/shine-border";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export const Skills = () => {
    const pawItemClass =
        "relative pl-8 before:content-[''] before:absolute before:left-0 md:before:top-2 before:top-1 before:w-4 before:h-4 before:bg-[url('/paw.png')] before:bg-contain before:bg-no-repeat";

    return (
        <section
            className="relative md:text-2xl px-5 md:scroll-mt-16 scroll-mt-12"
            id="skills"
        >
            <Image
                src="/cat-4.png"
                alt="Cat"
                width={300}
                height={300}
                className="absolute md:-top-42 -top-32 md:right-20 right-0 opacity-60 hover:opacity-80 transition duration-500 w-60 md:w-75"
            />
            <Image
                src="/planet-3.png"
                alt="Planet"
                width={100}
                height={100}
                className="absolute md:top-36 top-28 md:-left-20 -left-10 opacity-60 hover:opacity-80 transition duration-500"
            />
            <div className="-z-10 md:h-96 md:w-96 h-60 w-60 absolute bg-purple-600/20 rounded-full blur-[150px] -left-32 top-40" />
            <div className="-z-10 md:h-96 md:w-96 h-60 w-60 absolute bg-blue-600/20 rounded-full blur-[150px] right-20 top-10" />
            <div className="-z-10 md:h-80 md:w-80 h-40 w-40 absolute bg-pink-500/20 rounded-full blur-[140px] left-1/4 top-1/3" />
            <Sparkle className="absolute top-50 right-15 opacity-20 hover:opacity-40 transition duration-500" />
            <Sparkle className="absolute top-100 left-0 opacity-20 hover:opacity-40 transition duration-500" />
            <Sparkle className="absolute -bottom-10 right-50 opacity-20 hover:opacity-40 transition duration-500" />
            <div className="flex items-center gap-5 mb-4">
                <h2 className="text-4xl font-semibold">Skills</h2>
                <div className="grow border-t border-white" />
            </div>
            <p className="mb-10">
                Tools of the night shift. Each one chosen carefully, mastered
                patiently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="border border-white/5 rounded-xl p-5 relative overflow-hidden"
                    >
                        <ShineBorder shineColor={skill.shine} />

                        <h3 className="font-semibold mb-4 text-3xl bg-linear-to-r from-fuchsia-500 via-violet-500 to-blue-600 bg-clip-text text-transparent text-center">
                            {skill.title}
                        </h3>

                        <ul className="space-y-2">
                            {skill.items.map((item) => (
                                <li key={item} className={pawItemClass}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

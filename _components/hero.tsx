"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Download, Sparkle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const innerOrbitIcons = [
    { src: "/tech/react.svg", label: "React", glow: "#61DAFB" },
    { src: "/tech/nextjs.svg", label: "Next.js", glow: "#FFFFFF" },
    { src: "/tech/typescript.svg", label: "TypeScript", glow: "#3178C6" },
    { src: "/tech/tailwindcss.svg", label: "Tailwind CSS", glow: "#38BDF8" },
];

const outerOrbitIcons = [
    { src: "/tech/nodedotjs.svg", label: "Node.js", glow: "#83CD29" },
    { src: "/tech/supabase.svg", label: "Supabase", glow: "#3ECF8E" },
    { src: "/tech/git.svg", label: "Git", glow: "#F05032" },
    { src: "/tech/figma.svg", label: "Figma", glow: "#A259FF" },
];

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeToDesktopQuery(callback: () => void) {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
}

function getIsDesktopSnapshot() {
    return window.matchMedia(DESKTOP_QUERY).matches;
}

function getIsDesktopServerSnapshot() {
    return false;
}

export const Hero = () => {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const resumeHref =
        locale === "es"
            ? "/Jessica_Patino_CV_ES.pdf"
            : "/Jessica_Patino_CV_EN.pdf";

    const isDesktop = useSyncExternalStore(
        subscribeToDesktopQuery,
        getIsDesktopSnapshot,
        getIsDesktopServerSnapshot,
    );

    const innerRadius = isDesktop ? 200 : 118;
    const innerIconSize = isDesktop ? 44 : 28;
    const outerRadius = isDesktop ? 270 : 145;
    const outerIconSize = isDesktop ? 36 : 22;

    return (
        <section
            className="relative mt-16 py-5 md:scroll-mt-16 scroll-mt-12 text-xl p-5"
            id="hero"
        >
            <Image
                src="/planet-1.png"
                alt={t("planetAlt")}
                width={300}
                height={300}
                className="absolute md:top-10 -top-30 md:-left-50 left-0 opacity-60 hover:opacity-80 transition"
            />
            <Sparkle className="absolute top-40 right-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Image
                src="/planet-2.png"
                alt={t("planetAlt")}
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

            <div className="flex flex-col md:grid md:grid-cols-2 md:items-center min-h-[80vh] gap-10">
                <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-5">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <span className="relative flex size-3">
                                <span className="absolute inset-0 rounded-full bg-foreground blur-[3px] animate-star-glow" />
                                <span className="relative size-3 rounded-full bg-foreground" />
                            </span>
                            <TypingAnimation className="text-lg md:text-2xl font-semibold">
                                {t("signature")}
                            </TypingAnimation>
                        </div>
                        <h1 className="md:text-[5.25rem] text-4xl font-extrabold text-shadow-[0_5px_25px_rgb(0_0_0/0.25)] text-shadow-white/50">
                            {t("title")}
                        </h1>
                    </div>
                    <p className="md:max-w-xl max-w-sm text-sm md:text-base text-center md:text-left text-foreground/80">
                        {t("description")}
                    </p>
                    <div className="flex gap-5 items-center">
                        <RainbowButton asChild size="lg">
                            <Link href="#projects">{t("viewProjects")}</Link>
                        </RainbowButton>
                        <RainbowButton asChild variant="outline" size="lg">
                            <Link href={resumeHref} download>
                                {t("resume")} <Download />
                            </Link>
                        </RainbowButton>
                    </div>
                    <p className="text-sm text-white/70 mt-4">
                        {t("availability")}
                    </p>
                </div>

                <div className="order-1 md:order-2 relative flex h-80 w-80 md:h-150 md:w-150 items-center justify-center mx-auto">
                    <Image
                        src="/jessi-photo.png"
                        alt={t("photoAlt")}
                        width={320}
                        height={320}
                        className="z-10 rounded-full object-cover border-4 border-white/10 size-48 md:size-80"
                    />

                    <OrbitingCircles
                        radius={innerRadius}
                        duration={20}
                        iconSize={innerIconSize}
                    >
                        {innerOrbitIcons.map((icon) => (
                            <Image
                                key={icon.label}
                                src={icon.src}
                                alt={icon.label}
                                width={innerIconSize}
                                height={innerIconSize}
                                style={{
                                    filter: `drop-shadow(0 0 3px ${icon.glow}99)`,
                                }}
                            />
                        ))}
                    </OrbitingCircles>

                    <OrbitingCircles
                        radius={outerRadius}
                        duration={28}
                        iconSize={outerIconSize}
                        reverse
                    >
                        {outerOrbitIcons.map((icon) => (
                            <Image
                                key={icon.label}
                                src={icon.src}
                                alt={icon.label}
                                width={outerIconSize}
                                height={outerIconSize}
                                style={{
                                    filter: `drop-shadow(0 0 3px ${icon.glow}99)`,
                                }}
                            />
                        ))}
                    </OrbitingCircles>
                </div>
            </div>
        </section>
    );
};

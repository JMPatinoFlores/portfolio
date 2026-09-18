"use client";

import { TranslatedProjectProps } from "@/_interfaces/interfaces";
import { Github, LinkIcon, Maximize2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const CARD_BADGE_COUNT = 3;

export const ProjectCard = ({
    project,
}: {
    project: TranslatedProjectProps;
}) => {
    const t = useTranslations("Projects.card");
    const [imgSrc, setImgSrc] = useState(
        project.image || "/image-placeholder-2.png",
    );
    const [open, setOpen] = useState(false);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [brokenIndices, setBrokenIndices] = useState<Record<number, boolean>>(
        {},
    );

    const cardTools = project.tools.slice(0, CARD_BADGE_COUNT);
    const galleryImages =
        project.images && project.images.length > 0
            ? project.images
            : [project.image || "/image-placeholder-2.png"];

    useEffect(() => {
        if (!carouselApi) return;
        const onSelect = () =>
            setCurrentSlide(carouselApi.selectedScrollSnap());
        carouselApi.on("select", onSelect);
        return () => {
            carouselApi.off("select", onSelect);
        };
    }, [carouselApi]);

    return (
        <div className="group rounded-xl w-full flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xs overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-500">
            <div className="w-full h-64 shrink-0 overflow-hidden group relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                <Image
                    src={imgSrc}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    onError={() => setImgSrc("/image-placeholder-2.png")}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-5 flex flex-col w-full h-full gap-3">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <div className="flex items-center gap-1.5 flex-wrap">
                    {cardTools.map((tool) => (
                        <span
                            key={tool.label}
                            className="text-[10px] py-0.5 px-2 flex items-center gap-1 rounded-full bg-pink-400/20 border border-pink-500"
                        >
                            <tool.icon className="size-3" />
                            <span>{tool.label}</span>
                        </span>
                    ))}
                </div>
                <p className="text-xs text-white/80">
                    {project.shortDescription}
                </p>
                <div className="mt-auto pt-2 flex items-center gap-2">
                    {project.repo && (
                        <Button asChild variant="outline" size="icon-sm">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.repo}
                                aria-label={t("code")}
                            >
                                <Github className="size-4" />
                            </Link>
                        </Button>
                    )}
                    {project.link && (
                        <Button asChild variant="outline" size="icon-sm">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                aria-label={t("live")}
                            >
                                <LinkIcon className="size-4" />
                            </Link>
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="icon-sm"
                        className="ml-auto"
                        onClick={() => setOpen(true)}
                        aria-label={t("seeMore")}
                    >
                        <Maximize2 />
                    </Button>
                </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 flex flex-col gap-4">
                        <Carousel setApi={setCarouselApi} className="shrink-0">
                            <CarouselContent>
                                {galleryImages.map((src, index) => (
                                    <CarouselItem key={`${src}-${index}`}>
                                        <div className="w-full h-64 rounded-lg overflow-hidden relative">
                                            <Image
                                                src={
                                                    brokenIndices[index]
                                                        ? "/image-placeholder-2.png"
                                                        : src
                                                }
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                sizes="(min-width: 640px) 32rem, 100vw"
                                                onError={() =>
                                                    setBrokenIndices(
                                                        (prev) => ({
                                                            ...prev,
                                                            [index]: true,
                                                        }),
                                                    )
                                                }
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {galleryImages.length > 1 && (
                                <>
                                    <CarouselPrevious className="left-2 border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white" />
                                    <CarouselNext className="right-2 border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white" />
                                    <div className="absolute bottom-2 right-2 z-10 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                                        {currentSlide + 1} /{" "}
                                        {galleryImages.length}
                                    </div>
                                </>
                            )}
                        </Carousel>
                        <p className="text-sm text-white/80">
                            {project.description}
                        </p>
                        <div className="flex items-center gap-1 flex-wrap">
                            {project.tools.map((tool) => (
                                <span
                                    key={tool.label}
                                    className="text-[10px] py-0.5 px-2 flex items-center gap-1.5 rounded-full bg-white/30 backdrop-blur-sm text-white border border-white/20"
                                >
                                    <span className="size-1 rounded-full bg-white shrink-0" />
                                    <span>{tool.label}</span>
                                </span>
                            ))}
                        </div>
                        {project.stack && (
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs uppercase tracking-wide text-white/50">
                                    {t("stack")}
                                </h4>
                                <p className="text-sm text-white/80">
                                    {project.stack}
                                </p>
                            </div>
                        )}
                        {project.architecture && (
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs uppercase tracking-wide text-white/50">
                                    {t("architecture")}
                                </h4>
                                <p className="text-sm text-white/80">
                                    {project.architecture}
                                </p>
                            </div>
                        )}
                        {project.scope && (
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs uppercase tracking-wide text-white/50">
                                    {t("scope")}
                                </h4>
                                <p className="text-sm text-white/80">
                                    {project.scope}
                                </p>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        {project.repo && (
                            <Button asChild variant="outline" size="sm">
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.repo}
                                    aria-label={t("code")}
                                >
                                    <Github className="size-4" /> {t("code")}
                                </Link>
                            </Button>
                        )}
                        {project.link && (
                            <Button asChild variant="outline" size="sm">
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.link}
                                    aria-label={t("live")}
                                >
                                    <LinkIcon className="size-4" /> {t("live")}
                                </Link>
                            </Button>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

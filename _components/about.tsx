import { Sparkle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const About = () => {
    const t = useTranslations("About");

    return (
        <section
            className="relative md:scroll-mt-16 scroll-mt-12 p-5 md:text-lg text-sm"
            id="about"
        >
            <div className="md:h-96 md:w-96 h-60 w-60 absolute bg-purple-500/20 rounded-full blur-[150px] md:-right-20 right-10 bottom-10" />
            <div className="h-12 w-32 absolute bg-teal-500/80 rounded-full blur-[80px] right-100 bottom-25" />
            <div className="md:h-96 md:w-96 h-60 w-60 absolute bg-pink-500/20 rounded-full blur-[150px] -bottom-30" />
            <div className="md:h-96 md:w-96 h-60 w-60 absolute bg-blue-500/20 rounded-full blur-[150px] top-20 right-96" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-60 right-15 opacity-20 hover:opacity-40 transition" />
            <div className="flex items-center gap-5">
                <h2 className="text-4xl font-semibold">{t("title")}</h2>
                <div className="grow border-t border-white" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 max-w-7xl mx-auto md:justify-items-end">
                <div className="flex flex-col gap-5">
                    <div className="md:space-y-8 space-y-4 md:max-w-2xl md:py-10 py-5">
                        <p>{t("paragraph1")}</p>
                        <p>{t("paragraph2")}</p>
                        <p>{t("paragraph3")}</p>
                    </div>
                    <div className="grid grid-cols-2 md:gap-5 md:max-w-xl">
                        <div className="flex md:gap-5 gap-2 items-center">
                            <Image
                                src="/paw.png"
                                alt={t("pawAlt")}
                                width={24}
                                height={24}
                            />
                            <p>{t("highlight1")}</p>
                        </div>
                        <div className="flex md:gap-5 gap-2 items-center">
                            <Image
                                src="/paw.png"
                                alt={t("pawAlt")}
                                width={24}
                                height={24}
                            />
                            <p>{t("highlight2")}</p>
                        </div>
                        <div className="flex md:gap-5 gap-2 items-center">
                            <Image
                                src="/paw.png"
                                alt={t("pawAlt")}
                                width={24}
                                height={24}
                            />
                            <p>{t("highlight3")}</p>
                        </div>
                        <div className="flex md:gap-5 gap-2 items-center">
                            <Image
                                src="/paw.png"
                                alt={t("pawAlt")}
                                width={24}
                                height={24}
                            />
                            <p>{t("highlight4")}</p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/cat-1.png"
                    alt={t("catAlt")}
                    height={800}
                    width={800}
                    className="object-cover opacity-60 hover:opacity-80 transition h-full duration-500"
                />
            </div>
        </section>
    );
};

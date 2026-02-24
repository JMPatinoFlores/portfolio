import { Sparkle } from "lucide-react";
import Image from "next/image";

export const About = () => {
    return (
        <section className="relative scroll-mt-16 p-5" id="about">
            <div className="h-96 w-96 absolute bg-purple-500/20 rounded-full blur-[150px] -right-20 bottom-10" />
            <div className="h-12 w-32 absolute bg-teal-500/80 rounded-full blur-[80px] right-100 bottom-25" />
            <div className="h-96 w-96 absolute bg-pink-500/20 rounded-full blur-[150px] -bottom-30" />
            <div className="h-96 w-96 absolute bg-blue-500/20 rounded-full blur-[150px] top-20 right-96" />
            <Sparkle className="absolute bottom-40 left-15 opacity-20 hover:opacity-40 transition" />
            <Sparkle className="absolute bottom-60 right-15 opacity-20 hover:opacity-40 transition" />
            <div className="flex items-center gap-5">
                <h2 className="text-4xl font-semibold">About</h2>
                <div className="grow border-t border-white" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto justify-items-end">
                <div className="flex flex-col gap-5">
                    <div className="space-y-8 max-w-2xl py-10 text-lg">
                        <p>
                            I’m a frontend developer specialized in building
                            modern, scalable web applications using React and
                            Next.js. I have experience working on production
                            systems including ERP/CRM platforms, booking
                            applications, and management dashboards with
                            role-based workflows.
                        </p>
                        <p>
                            I’m especially interested in the user experience
                            side of frontend development. When building
                            features, I focus not only on implementation but
                            also on usability, user flows, and how interfaces
                            can feel clear and intuitive.
                        </p>
                        <p>
                            I enjoy creating clean, maintainable architectures,
                            working with backend APIs, and continuously
                            improving the quality and reliability of the
                            applications I build.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 max-w-xl">
                        <div className="flex gap-5 items-center">
                            <Image
                                src="/paw.png"
                                alt="Paw"
                                width={24}
                                height={24}
                            />
                            <p>User-focused feature development</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image
                                src="/paw.png"
                                alt="Paw"
                                width={24}
                                height={24}
                            />
                            <p>Scalable component architecture</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image
                                src="/paw.png"
                                alt="Paw"
                                width={24}
                                height={24}
                            />
                            <p>Clean and maintainable code</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image
                                src="/paw.png"
                                alt="Paw"
                                width={24}
                                height={24}
                            />
                            <p>Continuous learning</p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/cat-1.png"
                    alt="Cat"
                    height={800}
                    width={800}
                    className="object-cover opacity-60 hover:opacity-80 transition h-full duration-500"
                />
            </div>
        </section>
    );
};

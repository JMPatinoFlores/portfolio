import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/_components/navbar";
import { Particles } from "@/components/ui/particles";
import { Footer } from "@/_components/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jessiowe-dev.vercel.app"),
    title: "Jessica Patiño | Frontend Developer",
    description:
        "Frontend Developer specialized in React, Next.js and TypeScript. Portfolio featuring dashboards, booking platforms and modern user interfaces.",
    keywords: [
        "Jessica Patiño",
        "Frontend Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio",
        "Web Developer",
    ],
    authors: [{ name: "Jessica Patiño" }],
    openGraph: {
        title: "Jessica Patiño | Frontend Developer",
        description:
            "Frontend Developer specialized in modern web applications using React and Next.js.",
        url: "https://jessiowe-dev.vercel.app",
        siteName: "Jessica Patiño Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <div className="relative flex flex-col bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-950 via-blue-950 to-purple-900">
                    <Particles
                        className="absolute inset-0 -z-10"
                        quantity={150}
                        ease={80}
                        color="#ffffff"
                    />
                    <Navbar />
                    <main className="flex-1 min-h-screen container mx-auto">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
